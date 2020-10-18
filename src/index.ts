import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import userRoutes from './routes/userRoutes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.use('/users', userRoutes);
  }
}

const port = 8000;
const app = new App().app;

app.listen(port, (): void => {
  console.log(`Server berjalan di port ${port}`);
});
