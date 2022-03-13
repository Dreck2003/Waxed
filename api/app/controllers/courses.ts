import {Request,Response,NextFunction} from 'express';
import prisma from '../models/prisma';
import multer from 'multer';
import fs from 'fs';
// import { createDiffieHellman } from 'crypto';


var storage = multer.diskStorage({
  destination: function (req:Request,file, cb) {

    const {userName}=req.body;
    console.log(req.body)
    const path=`uploads/${userName}/jpg`;
    if (!(fs.existsSync(path))){
      fs.mkdirSync(path, { recursive: true });
    } 

    cb(null, path);
  },
  filename: function (req:Request, file, cb) {
      console.log(file)
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

var upload = multer({ storage: storage });


export const subirFile=upload.single('image')


export const getCourses= async (req: Request, res: Response, next: NextFunction)=>{

    res.send('ok')


}
export const createCourse= async (req: any, res: Response, next: NextFunction)=>{

    console.log(req.body)
    const {name,content,userName,img}=req.body;
    return res.json({img:img});

    // try{

    //     const userCourse= await prisma.user.findUnique({
    //         where:{
    //             userName:userName
    //         }
    //     })
    //     console.log(userCourse);


    //     if(userCourse){
    //         const course=await prisma.course.create({
    //         data:{
    //             name:name,
    //             content:content,
    //             userId:userCourse.id
    //         }
    //         })
    //         return res.send(course)
            
    //     }

    //     return res.status(404).send({error:'Not exist user'})

        


    // }catch(err){
    //     httpError(res,err)

    // }

    // res.send('ok')


}