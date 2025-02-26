import crypto from "crypto";
import bcrypt from "bcryptjs";
import { StoreManager } from '../../../store/domain/storeManager';
import { AuthenticationManager } from '../../domain/manager/authenticationManager';

const SECRET_KEY = process.env.SESSION_SECRET || "fallback-secret";
const HASHED_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const COOKIE_NAME = "admin_session";

export class SignedTokenAuthenticationManager implements AuthenticationManager {
  private storeManager: StoreManager;

  constructor(storeManager: StoreManager) {
    this.storeManager = storeManager;
  }

  async login(password: string): Promise<boolean> {
    if (!HASHED_ADMIN_PASSWORD || !password) {
      return false;
    }

    const isMatch = await bcrypt.compare(password, HASHED_ADMIN_PASSWORD);
    if (!isMatch) {
      return false;
    }

    const sessionToken = crypto.randomUUID();
    await this.storeManager.setItem(COOKIE_NAME, sessionToken);

    const hashedToken = this.hashSessionToken(sessionToken);
    await this.storeManager.setItem(`${COOKIE_NAME}_hashed`, hashedToken);

    return true;
  }

  async validateSession(): Promise<boolean> {
    try {
      const sessionToken = await this.storeManager.getItem(COOKIE_NAME);
      if (!sessionToken) {
        return false;
      }

      const storedHashedToken = await this.storeManager.getItem(`${COOKIE_NAME}_hashed`);
      if (!storedHashedToken) {
        return false;
      }

      const hashedToken = this.hashSessionToken(sessionToken);
      if (hashedToken !== storedHashedToken) {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }

  async logout(): Promise<void> {
    await this.storeManager.removeItem(COOKIE_NAME);
    await this.storeManager.removeItem(`${COOKIE_NAME}_hashed`);
  }

  private hashSessionToken(token: string): string {
    return crypto.createHmac("sha256", SECRET_KEY).update(token).digest("hex");
  }
}