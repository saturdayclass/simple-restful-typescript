import UserController from '../controllers/UserController';
import BaseRoutes from './BaseRoutes';

class UserRoutes extends BaseRoutes {
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
