import { number, object, string } from 'yup';

import { stateMatches, zipCodeMatches } from '../../utils';

export const addressSchema = object().shape({
  state: string()
    .matches(stateMatches.regex, { message: stateMatches.message })
    .required(),
  city: string().required(),
  street: string().required(),
  houseNumber: number().required(),
  zipCode: string()
    .matches(zipCodeMatches.regex, { message: zipCodeMatches.message })
    .required(),
});
