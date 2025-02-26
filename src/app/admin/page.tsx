"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnnouncementDTO } from "../api/announcements/announcementDTO";

export default function AdminPage() {
    const [message, setMessage] = useState("");
    const [announcements, setAnnouncements] = useState<AnnouncementDTO[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            const res = await fetch("/api/auth/validate");
            const data = await res.json();

            if (data.valid) {
                setIsAuthenticated(true);
                fetch("/api/announcements")
                    .then((res) => res.json())
                    .then((data) => setAnnouncements(data));
            } else {
                router.push("/admin/login");
            }
        }

        checkAuth();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message) return alert("Please fill in all fields.");

        const res = await fetch("/api/announcements", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });

        if (res.ok) {
            const newAnnouncement: AnnouncementDTO = await res.json();
            setAnnouncements([...announcements, newAnnouncement]);
            setMessage("");
        }
    };

    const handleDelete = async (id: string) => {
        const res = await fetch(`/api/announcements?id=${id}`, { method: "DELETE" });
        if (res.ok) {
            setAnnouncements(announcements.filter((a) => a.id !== id));
        }
    };

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
    };

    if (!isAuthenticated) return null;

    return (
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}>
            <h1>Admin: Announcements</h1>
            <button onClick={handleLogout} style={{ marginBottom: "10px" }}>Logout</button>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required style={{ color: "black" }}/>
                <button type="submit">Add Announcement</button>
            </form>

            <h2>Existing Announcements</h2>
            {announcements.length === 0 ? (
                <p>No announcements.</p>
            ) : (
                <ul>
                    {announcements.map((a) => (
                        <li key={a.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span>{new Date(a.date).toLocaleString()}: {a.message}</span>
                            <button onClick={() => handleDelete(a.id)} style={{ marginLeft: 10 }}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}