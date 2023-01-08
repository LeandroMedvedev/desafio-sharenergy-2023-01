import mongoose, { Schema } from 'mongoose';

export const Address = mongoose.model(
  'Address',
  new Schema({
    street: String,
    houseNumber: Number,
    city: String,
    state: String,
    zipCode: String,
  })
);
