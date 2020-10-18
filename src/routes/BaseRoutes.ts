import { Router } from 'express';
import IRouter from './IRoutes';

abstract class BaseRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  abstract routes(): void;
}

export default BaseRoutes;
