import 'dotenv/config';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { IUserSignIn } from '../interfaces';
import { User } from '../models';

export const signInUserService = async ({
  username,
  password,
}: IUserSignIn) => {
  const user = await User.findOne({ username });

  if (!user) {
    return { status: 401, message: { message: 'invalid credentials' } };
  }

  const passwordMatch: boolean = await compare(password, user.password);

  if (!passwordMatch) {
    return { status: 401, message: { message: 'invalid credentials' } };
  }

  const token: string = sign(
    { name: user.name, username: user.username, email: user.email },
    process.env.SECRET_KEY,
    {
      expiresIn: process.env.EXPIRES_IN,
    }
  );

  const { name, email } = user;

  return {
    status: 200,
    message: { token, user: { name, username: user.username, email } },
  };
};
