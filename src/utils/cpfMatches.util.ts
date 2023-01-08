export const cpfMatches = {
  regex: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm as RegExp,
  message: {
    cpf: {
      error: 'Invalid CPF format',
      expected: 'XXX.XXX.XXX-XX',
    },
  },
};
