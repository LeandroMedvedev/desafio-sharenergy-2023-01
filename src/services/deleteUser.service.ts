import { IUser } from '../interfaces';
import { User } from '../models';

export const deleteUserService = async ({
  username,
}: Pick<IUser, 'username'>) => {
  const userDeleted = await User.deleteOne({ username });

  if (!userDeleted.deletedCount) {
    return { status: 404, message: { message: 'user not found' } };
  }

  return { status: 204 };
};
