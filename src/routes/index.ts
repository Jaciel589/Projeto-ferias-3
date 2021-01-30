import { Router } from 'express';
import usersRoutes from './user.routes'; 
import receitasRoutes from  './receita.routes';
import sessionsRoutes from  './sessions.routes';
import ensureAuthenticated from '../middleawares/ensureAuthenticated';


const routes = Router();
routes.use('/sessions', sessionsRoutes);
console.log('receitas' )
routes.use('/receitas', receitasRoutes);
routes.use('/users', usersRoutes); 


export default routes;