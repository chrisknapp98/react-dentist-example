"use client";

import { BrowserCookieStore } from "../data/BrowserCookieStore";
import type { Store } from "../domain/store";

export class BrowserStoreModule {
  provide(): Store {
    return new BrowserCookieStore();
  }
}
