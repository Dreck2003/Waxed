import { Request, Response, NextFunction,Router } from "express";
import { getCourses, createCourse, getCourseDetail, updateDateCourse, deleteCourse, UploadCourse } from "../controllers/courses";
import { validateCreateCourse } from "../validators/courses";
import jwt from 'jsonwebtoken';


interface JWTPayload {
  id: string;
}

const verifyToken=async(req:Request,res:Response,next:NextFunction)=>{

    try{
        console.log('Headers para crear cursos: ',req.headers);
        const auth = req.get("authorization");

        let TOKEN = '';
        if (auth && auth.toLowerCase().startsWith("bearer")) {
          TOKEN = auth.substring(7);
        }
        const decoded = jwt.verify(
          TOKEN,
          process.env.SECRET || "secreto?"
        ) as JWTPayload;

        if (!TOKEN || !decoded.id) {
          return res.status(401).send({ error: "token missing or invalid" });
        }
        return next();

    }catch(error){
        console.log(error);
        return res.status(500).end();
    }

}



const router = Router();

router.get('/:user',getCourses);
router.get('/course/:id',getCourseDetail);
router.post("/", verifyToken, UploadCourse, createCourse);
router.put('/',updateDateCourse);
router.delete('/delete/:id',deleteCourse);



module.exports =router;