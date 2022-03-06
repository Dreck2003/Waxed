import {validationResult} from 'express-validator';

import {Response,Request,NextFunction} from 'express';

export const validateResult=(req:Request, res: Response, next: NextFunction)=>{

    try{
        validationResult(req).throw();
        console.log('todo ha ido ok')
        return next();

    }catch(err:any){
        return res.status(403).send({error:err.array()})

    }

}

