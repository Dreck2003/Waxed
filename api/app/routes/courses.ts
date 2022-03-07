import { Router } from "express";
import {getCourses,createCourse} from '../controllers/courses';
import {validateCreateCourse} from '../validators/courses';

const router = Router();

router.get('/',getCourses);

router.post('/',validateCreateCourse,createCourse);



module.exports =router;