import { Router } from "express";
import { getCourses, createCourse, subirCourse, getCourseDetail, updateDateCourse } from "../controllers/courses";
import { validateCreateCourse } from "../validators/courses";


const router = Router();

router.get('/:user',getCourses);
router.get('/course/:id',getCourseDetail)
router.post("/",subirCourse, createCourse);
router.put('/',updateDateCourse)



module.exports =router;