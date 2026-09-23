import { ServerCookieStore } from "../data/ServerCookieStore";
import type { Store } from "../domain/store";

export class ServerStoreModule {
  provide(): Store {
    return new ServerCookieStore();
  }
}
