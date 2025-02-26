import { NextResponse } from "next/server";
import { AuthenticationModule } from "@/app/common/authentication/di/authenticationModule";

export async function POST() {
    const authManager = new AuthenticationModule().provideManager();
    await authManager.logout();

    return NextResponse.json({ success: true }, { status: 200 });
}