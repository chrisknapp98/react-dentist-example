import { NextResponse } from "next/server";
import { AuthenticationModule } from "@/app/common/authentication/di/authenticationModule";

export async function GET() {
    const authManager = new AuthenticationModule().provideManager();
    const isValid = await authManager.validateSession();

    return NextResponse.json({ valid: isValid }, { status: isValid ? 200 : 401 });
}