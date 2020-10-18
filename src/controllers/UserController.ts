import { Request, Response } from 'express';
import IController from '../controllers/IController';

class UserController implements IController {
  public all(req: Request, res: Response): Response {
    return res.send('hi');
  }
  public add(req: Request, res: Response): Response {
    return res.send(req.body);
  }
  public byId(req: Request, res: Response): Response {
    return res.send('hi');
  }
  public update(req: Request, res: Response): Response {
    return res.send('hi');
  }
  public delete(req: Request, res: Response): Response {
    return res.send('hi');
  }
}

export default new UserController();
