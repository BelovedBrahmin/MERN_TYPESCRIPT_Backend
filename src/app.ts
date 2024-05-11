import mongoose, { ConnectOptions } from 'mongoose';
// import express, { Express } from "express"
import cors from 'cors';
import todoRoutes from './routes';
// import bodyParser from "body-parser";

// const app: Express = express()

const PORT: string | number = process.env.PORT || 4000;

// app.use(todoRoutes)
// // create application/json parser
// var jsonParser = bodyParser.json()

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: true })

// app.use(jsonParser);
// app.use(urlencodedParser);

import express, { Request, Response } from 'express';
const app = express();
app.use(cors());
app.use(express.json());
app.use(todoRoutes);

const URI: string = 'mongodb://127.0.0.1:27017/test';

// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
// const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  } as ConnectOptions)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
