import {Request,Response,NextFunction} from 'express';
import prisma from '../models/prisma';
import multer from 'multer';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import { courseDeleted } from '../helpers/deletedCourse';
import { httpError } from '../helpers/handleError';
import { CourseExist } from '../helpers/Exist';

const Corte = "http://localhost:3001";
const srcToUrl = (src: string) => {
  const data = src.split(`${"\\"}`).slice(1).join("/");
  console.log("data: ", data);
  return `${Corte}/${data}`;
};

const pathCortes=__dirname.toString().split(`${"\\"}`);
const indexPath=pathCortes.findIndex(word=>word === 'api');

const pathToApi = pathCortes.slice(0,indexPath+1).join('/');
const UrlToDelete=(src:string)=>{
  console.log('el src: ',src)
  // console.log("el src cortado: ", src.split(`${"\\"}`));
  const data = src.split('/').slice(3,5).join('/');
  console.log('la data es : ',data)
  return `${pathToApi}/public/${data}`;
}

interface JWTPayload{
  id:string
}

var storage = multer.diskStorage({
  destination: function (req:Request,file, cb){
    const { name,userName } = req.body;
    console.log('courses: ',req.body);
    const path = `public/${userName}/${name}`;
    
    try{
      if (!(fs.existsSync(path))){
        fs.mkdirSync(path, { recursive: true });
      } 
      cb(null, path);
    }catch(error){
      console.log('EL CURSO YA EXISTIA EN EL USUARIO: ',error);
      // cb(null,false);
    }
  },
  filename:  async(req:Request, img, cb)=> {
      
    console.log("courseIMg: ", img);
    const { name, userName } = req.body;

    try{
      const existCourse=await CourseExist(userName,name);

      if(existCourse){

        cb(null, `${Date.now()}-${img.originalname}`);
      }else{
        console.log('ocurrio un error en el nombre del archivo FILENAME: ');
        cb(null,'');
      }

    }catch(error){
      console.log(error);
    }
  },
});

var upload = multer({ storage: storage });

 const subirCourse=upload.single('image');

export const UploadCourse=async(req:Request,res:Response,next:NextFunction)=>{
  try{

    subirCourse(req,res,(error)=>{
      console.log('error en upload 79- ',error);
      if(error){
        return res.status(500).end();
      }else{
        next();
      }

    })

  }catch(error){
    console.log('currio un error: ',error);
    return res.status(500).end();
  }

}


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
    console.log('path: ',path)
    
    try{
      
      const user = await prisma.user.findUnique({
        where: { userName},
      });

      // console.log('el usuario es: ',user)
      // console.log('y su id es: ',user!.id)
      if(!user) return res.send({error:'user not exist', content:null});

      // console.log('body: ',req.body);
      const newCourse = await prisma.course.create({
        data: {
          name: name,
          content: content,
          img: srcToUrl(path),
          date,
          user:{
            connect:{userName}
          }
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

    }catch(error:any){
      return httpError(res,error);
      // console.error('createCourse: ',error);
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
        archive:true,
        summary:true
      }
    });

    if(!curso) return res.status(400).send({error:'the course not exist', content:null});
    console.log('curos get detail: ',curso);
    return res.send({error:null,content:curso})

  }catch(error:any){
    console.log('getCourseDettail: ',error);
    return httpError(res,error)
  }


}

export const updateDateCourse=async(req:Request, res:Response,next:NextFunction)=>{

    const id=req.body.id; // Id es el Id curso Int
    const date=req.body.date; //Es el date actualizado
    const text=req.body.text;

    const data= date ? {date}: {summary:text} 

    console.log('update course: ',req.body);
  try{

    const newCourse=await prisma.course.update({
      where:{id:id},
      data:data
    })

    console.log('newCourse: ',newCourse);
    return res.send({error:null,content:''});

  }catch(error:any){
    console.log('error es update Course: ',error);
    return httpError(res,error);
  }


}

export const deleteCourse=async(req: Request, res: Response, next: NextFunction)=>{

    const id=req.params.id;
    console.log('delete Course: ',id,typeof id);
    const auth=req.get('authorization');
  try{
      
    let TOKEN='';

    if(auth && auth.toLowerCase().startsWith('bearer')){
      TOKEN=auth.substring(7);
    }
    // const decoded= jwt.verify(TOKEN,process.env.SECRET || 'secret?') as JWTPayload;
    if(!TOKEN) return res.status(401).send({error:'invalid'});

    const decoded = jwt.verify(
      TOKEN,
      process.env.SECRET || "secreto?"
    ) as JWTPayload; ;
    console.log('decodeddddddddddddddd: ',decoded);

    if(!decoded.id){
      return res.status(401).send({error:'Token missing or invalid'})
    }

    const courser=await prisma.course.findUnique({
      where:{id:Number(id)},
      include:{
        user:true
      }
    })
    console.log('curossssss: ',courser)

    
    const isDelete= await courseDeleted(Number(id));

    if(isDelete){
      const pathDelete=UrlToDelete(isDelete.img);

      fs.rmdir(pathDelete, { recursive: true }, (error) => {
        if (error) {
          console.log("ocurrio un error: ", error);
          return res
            .status(404)
            .send({ error: "path not exist", content: null });
          // throw new Error("error en delete course path ");
        }
        return res.send({ error: null, content: isDelete });
      });

    }else{
      console.log('curso borrado: ',isDelete);
      return res.status(500).send({error:'not have deleteCourse',content:null});
    }

  }catch(error:any){
    console.log('error en deleteCourse:  ',error);
    return httpError(res,error);
  }

}





