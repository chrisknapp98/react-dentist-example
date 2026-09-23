import { NextResponse } from "next/server";
import { AuthenticationModule } from "@/app/common/authentication/di/authenticationModule";

export async function POST(req: Request) {
    const { password } = await req.json();
    if (typeof password !== "string" || password.length > 256) {
        return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const authManager = new AuthenticationModule().provideManager();

    const success = await authManager.login(password);
    if (!success) {
        return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
}
