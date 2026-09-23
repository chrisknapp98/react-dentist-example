export interface Store {
  setItem(key: string, value: string, expirationInHours?: number): Promise<void>;
  getItem(key: string): Promise<string | null>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
}
