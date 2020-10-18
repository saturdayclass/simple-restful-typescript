import { Request, Response } from 'express';

interface IController {
  all(request: Request, response: Response): Response;
  add(request: Request, response: Response): Response;
  byId(request: Request, response: Response): Response;
  update(request: Request, response: Response): Response;
  delete(request: Request, response: Response): Response;
}

export default IController;
