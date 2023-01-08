import { IUser } from '../interfaces';
import { User } from '../models';
import { serializedUserSchema } from '../schemas';

export const listUsersService = async ({
  username,
}: Pick<IUser, 'username'>) => {
  // if username query param IS passed
  if (username) {
    const user = await User.findOne({ username: username });
    const serialized = await serializedUserSchema.validate(user, {
      stripUnknown: true,
    });
    return { status: 200, message: serialized };
  }

  // if username query param IS NOT passed
  const users = await User.find();

  const serialized: Array<Partial<IUser>> = await Promise.all(
    users.map(
      async (user: IUser) =>
        await serializedUserSchema.validate(user, { stripUnknown: true })
    )
  );

  return { status: 200, message: serialized };
};
