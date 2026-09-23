import { NextResponse } from "next/server";
import { AuthenticationModule } from "../di/authenticationModule";

export async function requireAdmin(request: Request): Promise<NextResponse | null> {
  const requestOrigin = new URL(request.url).origin;
  const origin = request.headers.get("origin");

  if (origin !== requestOrigin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const isAuthenticated = await new AuthenticationModule()
    .provideManager()
    .validateSession();

  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}
