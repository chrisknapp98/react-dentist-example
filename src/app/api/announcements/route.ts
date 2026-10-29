import { revalidatePath, revalidateTag } from "next/cache";
import { ANNOUNCEMENTS_CACHE_TAG } from "@/app/common/backend/announcements";
import { proxyToBackend } from "@/app/common/backend/proxy";

export async function GET(request: Request) {
  return proxyToBackend(request, "/api/announcements");
}

export async function POST(request: Request) {
  return mutateAnnouncements(request);
}

export async function DELETE(request: Request) {
  return mutateAnnouncements(request);
}

export async function PUT(request: Request) {
  return mutateAnnouncements(request);
}

async function mutateAnnouncements(request: Request) {
  const response = await proxyToBackend(request, "/api/announcements");
  if (response.ok) {
    revalidateTag(ANNOUNCEMENTS_CACHE_TAG, { expire: 0 });
    revalidatePath("/");
  }
  return response;
}
