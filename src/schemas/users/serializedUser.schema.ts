import { object, string } from 'yup';

export const serializedUserSchema = object().shape({
  id: string().required(),
  name: string().required(),
  username: string().required(),
  email: string().required(),
  phone: string().required(),
  cpf: string().required(),
});
