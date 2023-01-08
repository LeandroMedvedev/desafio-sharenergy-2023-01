import { object, string } from 'yup';

export const signInUserSchema = object().shape({
  username: string().required(),
  password: string().required(),
});
