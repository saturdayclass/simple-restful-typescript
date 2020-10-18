import { Router, Request, Response } from 'express';
import IRouter from './IRoutes';

class UserRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.route('/').get((req: Request, res: Response) => {
      res.send('hi');
    });

    this.router.route('/').post((req: Request, res: Response): void => {
      res.send(req.body);
      console.log(req.body);
    });
  }
}

export default new UserRoutes().router;
