export interface AuthenticationManager { 
    login(password: string): Promise<boolean>
    validateSession(): Promise<boolean>
    logout(): Promise<void>
}
  