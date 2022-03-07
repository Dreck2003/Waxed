import {check} from 'express-validator';
import {Request, Response,NextFunction} from 'express';
import {validateResult} from '../helpers/validateHelper';

export const validateCreate=[
    check('name').exists().not().isEmpty(),
    check('lastName').exists().not().isEmpty(),
    check('email').exists().isEmail(),
    check('userName').exists().not().isEmpty(),
    check('password').exists().not().isEmpty(),
    (req: Request, res: Response,next: NextFunction)=>{
        console.log(req.body)
        validateResult(req, res, next);

    }
]

export const validateUser=[
    check('userName').exists().not().isEmpty(),
    check('password').exists().not().isEmpty(),
    (req:Request, res:Response, next: NextFunction)=>{
        validateResult(req, res, next);
    }

]
