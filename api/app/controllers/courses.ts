import {Request,Response,NextFunction} from 'express';
import prisma from '../models/prisma';
import multer from 'multer';
import fs from 'fs';

const Corte = "http://localhost:3001";


var storage = multer.diskStorage({
  destination: function (req:Request,file, cb) {
    const { name,userName } = req.body;
    console.log('courses: ',req.body);
    const path = `public/${userName}/${name}`;
    
    if (!(fs.existsSync(path))){
      fs.mkdirSync(path, { recursive: true });
    } 
    cb(null, path);
  },
  filename: function (req:Request, img, cb) {
      console.log('courseIMg: ',img)
    cb(null, `${Date.now()}-${img.originalname}`);
  },
});

var upload = multer({ storage: storage });

export const subirCourse=upload.single('image')


export const getCourses= async (req: Request, res: Response, next: NextFunction)=>{

    const userName=req.params.user;
    console.log('aparams: ',req.params);
    try{

      const coursesUser=await prisma.user.findUnique({
        where:{userName},
        select:{
          course:true
        }
      })
      console.log('courses: ',coursesUser)
      // const courses=await prisma.course.findMany();

      return res.send({error:null,content:coursesUser!.course});

    }catch(err){
      console.error(err);
      return res.send({error:err,content:null})
    }


}
export const createCourse= async (req: any, res: Response, next: NextFunction)=>{

    // console.log(req.body);
    const {path}=req.file;
    // console.log('el path de la imagen es: ',path)
    const {name,content,userName,date}=req.body;
    
    const srcToUrl = (src: string) => {
      const data = src.split(`${"\\"}`).slice(1).join("/");
      console.log('data: ',data)
      return `${Corte}/${data}`;
    };

    console.log('parameters: ',name,content,userName,date)
    try{
      const user=await prisma.user.findUnique({
        where:{userName}
      })

      console.log('el usuario es: ',user)
      console.log('y su id es: ',user!.id)
      if(!user) return res.send({error:'user not exist', content:null});

      console.log('body: ',req.body);
      console.log('path: ',path);
      console.log('el true path: ',srcToUrl(path))
      const newCourse = await prisma.course.create({
        data: {
          name: name,
          content: content,
          userId: user.id,
          img: srcToUrl(path),
          date
        },
        select: {
          id:true,
          name: true,
          content: true,
          img: true,
        },
      });
      console.log('course: ',newCourse)
      return res.send({error:null,content:newCourse})

    }catch(error){
      console.error('createCourse: ',error);
      return res.send({error,content:null})
    }

}

export const getCourseDetail=async(req: Request, res: Response, next: NextFunction)=>{

  console.log('envio de datos de deatalles del curso jajaja');
  console.log(req.params)
  const {id}=req.params; //El id deberia ser un Int --> ide del curso XD
  console.log(id,typeof id);
  if(typeof id !=='string') return res.send(400).json({error:'the id not is string', content:null});

  try{

    const curso=await prisma.course.findUnique({
      where:{id:Number(id)},
      select:{
        link:true,
        archive:true
      }
    });

    if(!curso) return res.status(400).send({error:'the course not exist', content:null});
    console.log('curos get detail: ',curso);
    return res.send({error:null,content:curso})

  }catch(error){
    console.log('getCourseDettail: ',error);
    return res.status(500).send({error,content:null});
  }


}

export const updateDateCourse=async(req:Request, res:Response,next:NextFunction)=>{

    const id=req.body.id; // Id es el Id curso Int
    const date=req.body.date; //Es el date actualizado

    console.log('update course: ',req.body);
  try{

    const newCourse=await prisma.course.update({
      where:{id:id},
      data:{date:date}
    })

    console.log('newCourse: ',newCourse);
    return res.send({error:null,content:''});

  }catch(error){
    console.log('error es update Course: ',error);
    return res.status(500).send({error:error});
  }


}

export const updateSummary=async(req:Request, res: Response, next: NextFunction)=>{

  const text=req.body.text; //texto generico
  const id=req.body.id; // EL id es el id delc curso Id
  console.log(req.body);

  try{
    const newCourse=await prisma.course.update({
      where:{id:id},
      data:{summary:text}
    })

    console.log(newCourse);
    return res.send({error:null,content:''});

  }catch(error){
    console.log('error en update summary: ',error);
    return res.status(500).send({error});
  }

}




