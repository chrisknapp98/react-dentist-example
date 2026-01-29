"use client";
import Head from "next/head";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            const res = await fetch("/api/auth/validate");
            const data = await res.json();

            if (data.valid) {
                router.push("/admin");
            }
        }
        checkAuth();
    }, []);
    const handleLogin = async () => {
        setError(""); // Clear previous errors

        const res = await fetch("/api/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        if (res.ok) {
            router.push("/admin"); // Redirect to admin panel
        } else {
            setError("Falsches Passwort");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f7f2f4] via-white to-[#f3f3f6] text-textGrey">
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-16">
                <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-[0_25px_70px_-40px_rgba(65,71,125,0.6)] ring-1 ring-black/5">
                    <p className="text-xs uppercase tracking-[0.3em] text-practiceGrey">Adminbereich</p>
                    <h1 className="mt-2 text-3xl font-light text-textBlue">Anmeldung</h1>
                    <p className="mt-3 text-sm text-textGrey/70">
                        Bitte Passwort eingeben, um fortzufahren.
                    </p>

                    <form
                        className="mt-8 space-y-4"
                        onSubmit={(event) => {
                            event.preventDefault();
                            handleLogin();
                        }}
                    >
                        <label className="block text-sm font-medium text-textGrey" htmlFor="admin-password">
                            Passwort
                        </label>
                        <input
                            id="admin-password"
                            type="password"
                            placeholder="Passwort eingeben"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-2xl border border-practiceGrey/30 bg-white px-4 py-3 text-base text-textGrey shadow-sm outline-none transition focus:border-practiceRed/60 focus:ring-2 focus:ring-practiceRed/20"
                        />
                        <button
                            type="submit"
                            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-practiceRed px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-practiceRed/30 transition hover:bg-practiceRed/90"
                        >
                            Anmelden
                        </button>
                    </form>

                    {error && (
                        <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-xs text-red-700">
                            {error}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
