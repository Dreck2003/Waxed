import {Router} from 'express';
import { createTask, deleteTask, getTasks, tachTask } from '../controllers/tasks';
const router = Router();


router.get('/',getTasks);
router.post('/',createTask);
router.put('/',tachTask);
router.delete('/:id',deleteTask);


module.exports=router;
