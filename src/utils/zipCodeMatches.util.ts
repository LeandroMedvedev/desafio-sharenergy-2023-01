export const zipCodeMatches = {
  regex: /^\d{5}-\d{3}$/gm as RegExp,
  message: {
    zipCode: {
      error: 'Invalid zipCode format',
      expected: 'XXXXX-XXX',
    },
  },
};
