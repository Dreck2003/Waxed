import {Router} from 'express';
import { createTask, deleteTask, getTasks, tachTask } from '../controllers/tasks';
const router = Router();

console.log('empieza a leer tasks')

router.get('/:id',getTasks);
router.post('/',createTask);
router.put('/',tachTask);
router.delete('/:id',deleteTask);

console.log('termino de leer wakwjwjja')

module.exports=router;
