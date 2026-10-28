export interface User {
  email: string
  firstname: string
  lastname: string
}

export interface AuthState {
  isLoggedIn: boolean
  user: User | null
  token: string | null
}
