import { Router } from "express";
import { getCourses, createCourse, subirFile } from "../controllers/courses";
import {Request, Response,NextFunction} from 'express';
import { validateCreateCourse } from "../validators/courses";


const router = Router();
const other=(req: Request, res: Response, next: NextFunction)=>{
    console.log('paso por aqui wajajwaja')
    next();
}

router.get('/',getCourses);

router.post("/", subirFile, validateCreateCourse, createCourse);



module.exports =router;