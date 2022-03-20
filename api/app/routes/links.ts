import {Router} from 'express';
import { createLink, deleteLink } from '../controllers/links';


const router=Router();

router.post('/',createLink);
router.delete('/',deleteLink);


module.exports =router;




