import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { AnnouncementDTO } from "./announcementDTO";

const BLOB_FILENAME = "announcements.json";
const BLOB_URL = process.env.NEXT_PUBLIC_VERCEL_BLOB_URL;
const BLOB_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

export async function GET() {
    try {
        if (!BLOB_URL) {
            console.error("BLOB_URL is not set in the environment variables.");
            return NextResponse.json({ error: "Blob storage URL not configured" }, { status: 500 });
        }

        const response = await fetchBlobBypassingCache();
        if (!response.ok) {
            console.error("Failed to fetch announcements");
            return NextResponse.json([], { status: 200 });
        }

        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error fetching announcements:", error);
        return NextResponse.json({ error: "Failed to fetch announcements" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        if (!BLOB_URL) {
            console.error("BLOB_URL is not set in the environment variables.");
            return NextResponse.json({ error: "Blob storage URL not configured" }, { status: 500 });
        }

        const { message } = await req.json();
        if (!message) {
            return NextResponse.json({ error: "A Message is required" }, { status: 400 });
        }

        let announcements = [];
        const response = await fetchBlobBypassingCache();
        if (response.ok) {
            announcements = await response.json();
        }

        const newAnnouncement = { id: randomUUID(), message, date: new Date().toISOString() };
        announcements.push(newAnnouncement);

        await put(BLOB_FILENAME, JSON.stringify(announcements, null, 2), {
            contentType: "application/json",
            access: "public",
            addRandomSuffix: false,
            token: BLOB_WRITE_TOKEN,
        });

        return NextResponse.json(announcements, { status: 201 });
    } catch (error) {
        console.error("Error adding announcement:", error);
        return NextResponse.json({ error: "Failed to add announcement" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    if (!BLOB_URL || !BLOB_WRITE_TOKEN) {
        return NextResponse.json({ error: "Blob storage configuration missing" }, { status: 500 });
    }

    const { searchParams } = new URL(req.url);
    const id: string | null = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    let announcements: AnnouncementDTO[] = [];
    const response = await fetchBlobBypassingCache();
    if (response.ok) {
        announcements = await response.json();
    }

    const index = announcements.findIndex((a) => a.id === id);
    if (index === -1) {
        return NextResponse.json({ error: "Announcement not found" }, { status: 404 });
    }
    announcements.splice(index, 1);

    await put(BLOB_FILENAME, JSON.stringify(announcements, null, 2), {
        contentType: "application/json",
        access: "public",
        addRandomSuffix: false,
        token: BLOB_WRITE_TOKEN,
    });

    return NextResponse.json(announcements, { status: 200 });
}

export async function PUT(req: Request) {
    if (!BLOB_URL || !BLOB_WRITE_TOKEN) {
        return NextResponse.json({ error: "Blob storage configuration missing" }, { status: 500 });
    }

    const { orderedIds } = await req.json();
    if (!Array.isArray(orderedIds)) {
        return NextResponse.json({ error: "orderedIds is required" }, { status: 400 });
    }

    let announcements: AnnouncementDTO[] = [];
    const response = await fetchBlobBypassingCache();
    if (response.ok) {
        announcements = await response.json();
    }
    const announcementsById = new Map(announcements.map((a) => [a.id, a]));
    const reordered: AnnouncementDTO[] = [];

    orderedIds.forEach((id: string) => {
        const item = announcementsById.get(id);
        if (item) reordered.push(item);
    });

    announcements.forEach((item) => {
        if (!orderedIds.includes(item.id)) reordered.push(item);
    });
    const missing = orderedIds.filter(id => !announcementsById.has(id));
    if (missing.length) {
        return NextResponse.json(
            { error: "Some ids do not exist", missing },
            { status: 400 }
        );
    }
    await put(BLOB_FILENAME, JSON.stringify(reordered, null, 2), {
        contentType: "application/json",
        access: "public",
        addRandomSuffix: false,
        token: BLOB_WRITE_TOKEN,
    });
    return NextResponse.json(reordered, { status: 200 });
}

async function fetchBlobBypassingCache(): Promise<Response> {
  const url = new URL(BLOB_URL!);
  url.searchParams.set("t", String(Date.now()));
  return fetch(url.toString(), { cache: "no-store" });
}
