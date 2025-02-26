import { CookieStoreManager } from '../data/CookieStoreManager'
import type { StoreManager } from '../domain/storeManager'

export class StoreModule {
  provide(): StoreManager {
    return new CookieStoreManager()
  }
}
