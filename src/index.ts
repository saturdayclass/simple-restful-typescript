import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { config as dotenv, config } from 'dotenv';

import userRoutes from './routes/userRoutes';
import authRoutes from './routes/AuthRoutes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.use('/api/v1/users', userRoutes);
    this.app.use('/api/v1/auth', authRoutes);
  }
}

const app = new App().app;

app.listen(process.env.PORT || 8000, (): void => {
  console.log(`Server berjalan di port ${process.env.PORT}`);
});
