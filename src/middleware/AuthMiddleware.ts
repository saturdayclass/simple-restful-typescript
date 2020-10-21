import { Request, Response, NextFunction } from 'express';

export const Auth = (req: Request, res: Response, next: NextFunction): any => {
  console.log(`This is middleware`);
  next();
};
