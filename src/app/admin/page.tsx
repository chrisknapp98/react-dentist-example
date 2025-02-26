"use client"; // This tells the server to only send the client-side code to the client

import { useState, useEffect } from "react";
import { AnnouncementDTO } from "../api/announcements/announcementDTO";

export default function AdminPage() {
    const [message, setMessage] = useState("");
    const [announcements, setAnnouncements] = useState<AnnouncementDTO[]>([]);

    useEffect(() => {
        fetch("/api/announcements")
            .then((res) => res.json())
            .then((data) => setAnnouncements(data));
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

    return (
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}>
            <h1>Admin: Announcements</h1>

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