import { proxyToBackend } from "@/app/common/backend/proxy";

export async function GET(request: Request) {
  return proxyToBackend(request, "/api/auth/validate");
}
