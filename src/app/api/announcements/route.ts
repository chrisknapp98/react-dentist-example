import { proxyToBackend } from "@/app/common/backend/proxy";

export async function GET(request: Request) {
  return proxyToBackend(request, "/api/announcements");
}

export async function POST(request: Request) {
  return proxyToBackend(request, "/api/announcements");
}

export async function DELETE(request: Request) {
  return proxyToBackend(request, "/api/announcements");
}

export async function PUT(request: Request) {
  return proxyToBackend(request, "/api/announcements");
}
