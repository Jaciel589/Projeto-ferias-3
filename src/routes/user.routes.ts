import { Router } from 'express'
import UsersController from '../controllers/UserController';
 
const usersRouter = Router();
 

usersRouter.post('/', UsersController.create);

 
 
export default usersRouter;