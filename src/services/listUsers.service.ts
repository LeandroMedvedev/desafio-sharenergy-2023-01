import { IUser } from '../interfaces';
import { User } from '../models';
import { serializedUserSchema } from '../schemas';

export const listUsersService = async () => {
  const users = await User.find();

  const serialized: Array<Partial<IUser>> = await Promise.all(
    users.map(
      async (user: IUser) =>
        await serializedUserSchema.validate(user, { stripUnknown: true })
    )
  );

  return { status: 200, message: serialized };
};
