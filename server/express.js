import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import Template from './../template';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.use(cors());

app.use('/', userRoutes);
app.use('/', authRoutes);

app.get('/', (req, res) => {
  res.status(200).send(Template());
})


export default app