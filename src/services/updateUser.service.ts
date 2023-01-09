import { IUser } from '../interfaces';
import { User } from '../models';

export const updateUserService = async (
  { ...fields }: Partial<IUser>,
  { id }: Pick<IUser, 'id'>
) => {
  await User.updateOne({ _id: id }, { $set: { ...fields } });

  return { status: 200, message: { message: 'user updated successfully' } };
};
