import { Router } from 'express'
import SessionsController from '../controllers/SessionsController';
 
const sessionsRouter = Router();
  
sessionsRouter.post('/', SessionsController.session);
 
export default sessionsRouter;