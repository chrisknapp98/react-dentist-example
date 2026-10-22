import { NextResponse } from "next/server";

// Keep the backend address and credential forwarding on the server.
export async function proxyToBackend(request: Request, path: string) {
  const base = process.env.BACKEND_API_URL;
  if (!base) {
    return NextResponse.json({ error: "Backend not configured" }, { status: 503 });
  }

  const incoming = new URL(request.url);
  const unsafe = !["GET", "HEAD", "OPTIONS"].includes(request.method);
  // Next.js may build request.url with localhost even when the browser uses a LAN host.
  const publicOrigin = new URL(`${incoming.protocol}//${request.headers.get("host") ?? incoming.host}`).origin;
  if (unsafe && request.headers.get("origin") !== publicOrigin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const headers = new Headers();
  for (const name of ["content-type", "cookie", "x-csrftoken", "origin", "referer"]) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }

  try {
    const target = new URL(path, base);
    target.search = incoming.search;
    const upstream = await fetch(target, {
      method: request.method,
      headers,
      body: unsafe ? await request.arrayBuffer() : undefined,
      cache: "no-store",
      redirect: "manual",
      signal: AbortSignal.timeout(10_000),
    });
    const responseHeaders = new Headers({ "Cache-Control": "no-store" });
    for (const name of ["content-type", "allow"]) {
      const value = upstream.headers.get(name);
      if (value) responseHeaders.set(name, value);
    }
    for (const cookie of upstream.headers.getSetCookie()) {
      responseHeaders.append("Set-Cookie", cookie);
    }
    // Normalize non-JSON permission errors for API clients.
    if (upstream.status === 403 && !upstream.headers.get("content-type")?.includes("application/json")) {
      responseHeaders.delete("content-type");
      return NextResponse.json({ error: "Request rejected. Reload the page and sign in again." }, {
        status: 403, headers: responseHeaders,
      });
    }
    return new Response(upstream.body, { status: upstream.status, headers: responseHeaders });
  } catch {
    return NextResponse.json({ error: "Backend temporarily unavailable" }, { status: 502 });
  }
}
