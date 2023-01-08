import { hashSync } from 'bcrypt';
import { lazy, mixed, object, string } from 'yup';

import { capitalize, cpfMatches, emailFormat, phoneMatches } from '../../utils';
import { addressSchema } from '../addresses/address.schema';

export const signUpUserSchema = object().shape({
  name: string()
    .transform((n: string) => capitalize(n))
    .required(),
  username: string().required(),
  email: string().email(emailFormat.message).lowercase().required(),
  phone: string()
    .matches(phoneMatches.regex, { message: phoneMatches.message })
    .required(),
  cpf: string()
    .matches(cpfMatches.regex, { message: cpfMatches.message })
    .required(),
  password: string()
    .transform((pass: string) => hashSync(pass, 10))
    .required(),
  address: lazy((value) => {
    return value !== undefined ? addressSchema : mixed().notRequired();
  }),
});
