import crypto from "crypto";
import bcrypt from "bcryptjs";
import { Store } from '../../../store/domain/store';
import { AuthenticationManager } from '../../domain/manager/authenticationManager';

const SECRET_KEY = process.env.SESSION_SECRET;
const HASHED_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const COOKIE_NAME = "admin_session";
const SESSION_DURATION_HOURS = 12;

export class SignedTokenAuthenticationManager implements AuthenticationManager {
  private store: Store;

  constructor(store: Store) {
    this.store = store;
  }

  async login(password: string): Promise<boolean> {
    if (!SECRET_KEY || !HASHED_ADMIN_PASSWORD || !password) {
      return false;
    }

    const isMatch = await bcrypt.compare(password, HASHED_ADMIN_PASSWORD);
    if (!isMatch) {
      return false;
    }

    const sessionToken = crypto.randomUUID();
    await this.store.setItem(COOKIE_NAME, sessionToken, SESSION_DURATION_HOURS);

    const hashedToken = this.hashSessionToken(sessionToken);
    await this.store.setItem(
      `${COOKIE_NAME}_hashed`,
      hashedToken,
      SESSION_DURATION_HOURS,
    );

    return true;
  }

  async validateSession(): Promise<boolean> {
    try {
      if (!SECRET_KEY) return false;

      const sessionToken = await this.store.getItem(COOKIE_NAME);
      if (!sessionToken) {
        return false;
      }

      const storedHashedToken = await this.store.getItem(`${COOKIE_NAME}_hashed`);
      if (!storedHashedToken) {
        return false;
      }

      const hashedToken = this.hashSessionToken(sessionToken);
      if (
        hashedToken.length !== storedHashedToken.length ||
        !crypto.timingSafeEqual(
          Buffer.from(hashedToken),
          Buffer.from(storedHashedToken),
        )
      ) {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }

  async logout(): Promise<void> {
    await this.store.removeItem(COOKIE_NAME);
    await this.store.removeItem(`${COOKIE_NAME}_hashed`);
  }

  private hashSessionToken(token: string): string {
    if (!SECRET_KEY) return "";

    return crypto.createHmac("sha256", SECRET_KEY).update(token).digest("hex");
  }
}
