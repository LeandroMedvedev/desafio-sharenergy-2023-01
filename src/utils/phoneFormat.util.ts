export const phoneMatches = {
  regex: /^\(\d{2}\)\s\d{5}-\d{4}$/gm as RegExp,
  message: {
    phone: {
      error: 'Invalid phone format',
      expected: '(XX) XXXXX-XXXX',
    },
  },
};
