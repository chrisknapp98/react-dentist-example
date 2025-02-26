import { StoreModule } from "../../store/di/storeModule";
import { StoreManager } from "../../store/domain/storeManager";
import { AuthenticationManager } from "../domain/manager/authenticationManager";
import { SignedTokenAuthenticationManager } from "../data/manager/signedTokenAuthenticationManager";

export class AuthenticationModule {
    private componentStoreModule(): StoreModule {
        return new StoreModule();
    }

    private componentStoreManager(): StoreManager {
        return this.componentStoreModule().provide();
    }    

    provideManager(): AuthenticationManager {
        return new SignedTokenAuthenticationManager(this.componentStoreManager());
    }
}