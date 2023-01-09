import { hashSync } from 'bcrypt';
import { object, string } from 'yup';

import { capitalize, cpfMatches, emailFormat, phoneMatches } from '../../utils';

export const updateUserSchema = object().shape({
  name: string().transform((n: string) => capitalize(n)),
  username: string(),
  email: string().email(emailFormat.message).lowercase(),
  phone: string().matches(phoneMatches.regex, {
    message: phoneMatches.message,
  }),
  cpf: string().matches(cpfMatches.regex, { message: cpfMatches.message }),
  password: string().transform((pass: string) => hashSync(pass, 10)),
});
