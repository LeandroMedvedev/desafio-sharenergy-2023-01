import { model, Schema } from 'mongoose';

const schema = new Schema({
  name: 'string',
  username: 'string',
  email: 'string',
  phone: 'string',
  cpf: 'string',
  password: 'string',
});

export const User = model('User', schema);
