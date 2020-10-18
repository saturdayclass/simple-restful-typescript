import { Router, Request, Response } from 'express';
import IRouter from './IRoutes';
import UserController from '../controllers/UserController';

class UserRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.route('/').get(UserController.all);

    this.router.route('/').post(UserController.add);
  }
}

export default new UserRoutes().router;
