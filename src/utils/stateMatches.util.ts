export const stateMatches = {
  regex: /^[A-Z]{2}$/gs as RegExp,
  message: {
    state: {
      error: 'Invalid state format',
      expected: 'XX',
    },
  },
};
