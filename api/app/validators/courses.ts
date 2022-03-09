import {Request,Response,NextFunction} from 'express' ;


const validateCreateCourse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    const {name}=req.body;

};

