import { ServerStoreModule } from "../../store/di/serverStoreModule";
import { Store } from "../../store/domain/store";
import { AuthenticationManager } from "../domain/manager/authenticationManager";
import { SignedTokenAuthenticationManager } from "../data/manager/signedTokenAuthenticationManager";

export class AuthenticationModule {
    private serverStoreModule(): ServerStoreModule {
        return new ServerStoreModule();
    }

    private componentStore(): Store {
        return this.serverStoreModule().provide();
    }    

    provideManager(): AuthenticationManager {
        return new SignedTokenAuthenticationManager(this.componentStore());
    }
}
