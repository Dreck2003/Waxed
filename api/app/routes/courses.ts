import { Router } from "express";
import { getCourses, createCourse, subirFile } from "../controllers/courses";
// import { validateCreateCourse } from "../validators/courses";


const router = Router();
const other=()=>{
    console.log('paso por aqui wajajwaja')
}

router.get('/',getCourses);

router.post("/", subirFile,other, createCourse);



module.exports =router;