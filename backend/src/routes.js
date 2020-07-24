import { Router } from 'express';
import ClientController from './app/controllers/ClientController';
import ProfessionalController from './app/controllers/ProfessionalController';
import SessionsController from './app/controllers/SessionController';
import OrderController from './app/controllers/OrderController';
import AdressController from './app/controllers/AdressController';
import ScheduleController from './app/controllers/ScheduleController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/clients', ClientController.store);
routes.put('/clients', authMiddleware, ClientController.update);

routes.get('/clients/adresses', authMiddleware, AdressController.index);
routes.post('/clients/adresses', AdressController.store);

routes.post('/professionals', ProfessionalController.store);
routes.get('/professionals', ProfessionalController.index);

routes.post('/sessions', SessionsController.store);

routes.get('/clients/orders', authMiddleware, OrderController.index);
routes.post('/clients/orders', authMiddleware, OrderController.store);
routes.delete('/clients/orders/:id', authMiddleware, OrderController.delete);

routes.get('/schedules', authMiddleware, ScheduleController.index);

export default routes;
