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
    this.router.route('/').get(UserController.all).post(UserController.add);
    this.router
      .route('/:id')
      .get(UserController.byId)
      .put(UserController.update)
      .delete(UserController.delete);
  }
}

export default new UserRoutes().router;
