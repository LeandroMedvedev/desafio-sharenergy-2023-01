import { object, string } from 'yup';

export const serializedUserSchema = object().shape({
  name: string().required(),
  username: string().required(),
  email: string().required(),
  phone: string().required(),
  cpf: string().required(),
});
