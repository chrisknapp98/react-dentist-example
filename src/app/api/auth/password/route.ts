import { proxyToBackend } from "@/app/common/backend/proxy";

export async function POST(request: Request) {
  return proxyToBackend(request, "/api/auth/password");
}
