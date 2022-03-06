import {Router} from 'express';
//============================================================
import {httpError} from '../helpers/handleError';
import { validateCreate,validateUser } from '../validators/users';
import {createUser,getUser} from '../controllers/users';

console.log('ROUTER_USER')

const router = Router();


router.get('/',validateUser,getUser);
router.post('/',validateCreate,createUser);


module.exports=router;