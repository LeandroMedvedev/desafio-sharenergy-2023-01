import { IUser } from '../interfaces';
import { User } from '../models';
import { serializedUserSchema } from '../schemas';

export const signUpUserService = async ({
  name,
  username,
  email,
  phone,
  cpf,
  password,
}: IUser) => {
  const user = new User({
    name,
    username,
    email,
    phone,
    cpf,
    password,
    // address,
  });

  await user.save();

  const serialized: Partial<IUser> = await serializedUserSchema.validate(user, {
    stripUnknown: true,
  });

  return { status: 201, message: serialized };
};
