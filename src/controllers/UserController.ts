import { Request, Response } from 'express';
import IController from '../controllers/IController';

const data: any[] = [
  { id: 1, name: 'Raihan' },
  { id: 1, name: 'Kepo' },
  { id: 1, name: 'Michael' },
];

class UserController implements IController {
  public all(req: Request, res: Response): Response {
    return res.send(data);
  }
  public add(req: Request, res: Response): Response {
    const { id, name } = req.body;
    data.push({ id, name });

    return res.send('Data Berhasil di tambahkan');
  }
  public byId(req: Request, res: Response): Response {
    const { id } = req.body;
    const person = data.find((item) => item.id === id);
    return res.send(person);
  }
  public update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find((item) => item.id === id);
    person.name = name;

    return res.send('Data updated successfully.');
  }
  public delete(req: Request, res: Response): Response {
    const { id } = req.params;

    const person = data.filter((item) => item.id != id);
    return res.send(person);
  }
}

export default new UserController();
