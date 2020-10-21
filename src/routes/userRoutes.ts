import UserController from '../controllers/UserController';
import BaseRoutes from './BaseRoutes';
import { Auth } from '../middleware/AuthMiddleware';

class UserRoutes extends BaseRoutes {
  public routes(): void {
    this.router
      .route('/')
      .get(Auth, UserController.all)
      .post(UserController.add);
    this.router
      .route('/:id')
      .get(UserController.byId)
      .put(UserController.update)
      .delete(UserController.delete);
  }
}

export default new UserRoutes().router;
