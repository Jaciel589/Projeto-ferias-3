import { Router } from 'express'
import ReceitasController from '../controllers/ReceitaController';
 
const receitasRouter = Router();
 

receitasRouter.post('/', ReceitasController.create);
receitasRouter.delete('/:id', ReceitasController.delete);
receitasRouter.put('/:id', ReceitasController.editar);
receitasRouter.get('/:user_id', ReceitasController.listaReceita);
 
export default receitasRouter;