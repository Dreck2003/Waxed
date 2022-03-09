import {Request,Response,NextFunction} from 'express' ;


export const validateCreateCourse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    console.log(req.body)

    const {name,content}=req.body;

    if(!name){
        console.log(name)
        return res.status(409).send({ error: "Course name is empty" });
    }
    if(content && content.length > 160){
        return res
          .status(409)
          .send({
            error: "The course description can not have more than 160 letters",
          });
    }
    next();

};

