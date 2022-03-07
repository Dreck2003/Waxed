import {check} from 'express-validator';
import {Request,Response,NextFunction} from 'express' ;
import {validateResult} from '../helpers/validateHelper';



export const validateCreateCourse=[
    check('name').exists().notEmpty(),
    check('content').isString(),
    check('userName').exists().notEmpty(),
    (req: Request, res: Response,next: NextFunction) =>{
        validateResult(req,res,next);

    }
    
]

