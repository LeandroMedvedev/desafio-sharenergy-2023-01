import 'dotenv/config';
import mongoose from 'mongoose';

import app from './app';

const db = process.env.DB;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose.set('strictQuery', true);
mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.hbqgswx.mongodb.net/${db}?retryWrites=true&w=majority`
  )

  .then(() => {
    console.log('Connected database!');
    const PORT = process.env.PORT || 3333;

    app.listen(PORT, () =>
      console.log(`App running!\nhttp://localhost:${PORT}`)
    );
  })
  .catch((error) =>
    console.log(`Error connecting to MongoDB Atlas:\n${error}`)
  );
