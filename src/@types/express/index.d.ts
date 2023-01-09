import { IUser, IUserSignIn } from '../../interfaces';

declare global {
  namespace Express {
    interface Request {
      user: IUser;
      validated: IUser | IUserSignIn;
    }
  }
}
