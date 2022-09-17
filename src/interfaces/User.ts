export interface User {
  id?: number,
  name: string,
  lastname: string,
  age: number,
  email: string
}

export interface UsersList {
  users: User[]
}

export interface AppInterface {
  appTitle?: string
}