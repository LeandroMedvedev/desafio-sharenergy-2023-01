import { IUser, IUserSignIn } from '../../interfaces';

declare global {
  namespace Express {
    interface Request {
      validated: IUser | IUserSignIn;
    }
  }
}
