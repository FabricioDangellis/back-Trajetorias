import { Router, Request, Response } from "express";
import psychologistRoutes from "modules/psychologists/infra/http/routes/PsychologistRoutes";
import sessionRoutes from "modules/users/infra/http/routes/SessionRoutes";
import userRoutes from "modules/users/infra/http/routes/UsersRoutes";

const routes = Router();

routes.use('/api/session', sessionRoutes);
routes.use('/api/users', userRoutes);
routes.use('/api/psichologists', psychologistRoutes);

routes.get('/', async (req: Request, res: Response) => {
  res.json({ message: 'Funcionando' });
});

export default routes;