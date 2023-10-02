// eslint-disable-next-line no-unused-vars
import { Express } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import { basicAuthenticate, xTokenAuthenticate } from '../interface/auth';

const injectRoutes = (api) => {
  api.get('/status', AppController.getStatus);
  api.get('/stats', AppController.getStats);

  api.post('/users', UsersController.postNew);

  api.get('/connect', basicAuthenticate, AuthController.getConnect);
  api.get('/disconnect', xTokenAuthenticate, AuthController.getDisconnect);
  api.get('/users/me', xTokenAuthenticate, UsersController.getMe);
};

export default injectRoutes;
