export interface User {
  readonly id?: string;
  name: string;
  username: string;
  phone: string;
  email: string;
  cpf: string;
  password: string;
}

export interface SignInCredentials {
  username: string;
  password: string;
}
