import BaseRoutes from './BaseRoutes';
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.route('/register').post(AuthController.register);
    this.router.route('/login').post(AuthController.login);
  }
}

export default new AuthRoutes().router;
