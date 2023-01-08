export interface IUser {
  name: string;
  username: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
}

export interface IUserSignIn {
  username: string;
  password: string;
}
