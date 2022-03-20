import {Request,Response,NextFunction} from 'express';
import prisma from '../models/prisma';
import multer from 'multer';
import fs from 'fs';

const Corte = "http://localhost:3001/";


var storage = multer.diskStorage({
  destination: function (req:Request,file, cb) {
    const { name } = req.body;
    console.log('courses: ',req.body)
    const path = `public/${name}`;
    
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

    try{

      const courses=await prisma.course.findMany();


      return res.send({error:null,content:courses});


    }catch(err){

      console.error(err);
      return res.send({error:err,content:null})
    }


}
export const createCourse= async (req: any, res: Response, next: NextFunction)=>{

    console.log(req.body);
    const {path}=req.file;
    console.log('el path de la imagen es: ',path)
    const {name,content,email}=req.body;
    
    const srcToUrl = (src: string) => {
      const data = src.split(`${"\\"}`).slice(1).join("/");
      return Corte + data;
    };

    try{

      const user=await prisma.user.findUnique({
        where:{email:email}
      })

      console.log('el usuario es: ',user)
      console.log(' y su id es: ',user!.id)
      if(!user) return res.send({error:'user not exist', content:null});


      const newCourse = await prisma.course.create({
        data: {
          name: name,
          content: content,
          userId: user.id,
          img: srcToUrl(path)
        },
        select: {
          name: true,
          content: true,
          img: true,
        },
      });

      return res.send({error:null,content:newCourse})



    }catch(error){
      console.error('createCourse: ',error);
      return res.send({error,content:null})
    }

}

export const getCourseDetail=async(req: Request, res: Response, next: NextFunction)=>{

  const {id}=req.params;//El id deberia ser un string --> nombre del curso XD

  if(typeof id !=='string') return res.send(400).json({error:'the id not is string', content:null});

  try{

    const curso=await prisma.course.findUnique({
      where:{
        name:id
      },
      select:{
        link:true,
        archive:true
      }
    })

    if(!curso) return res.status(400).send({error:'the course not exist', content:null});

    return res.send({error:null,content:curso})


  }catch(error){
    console.log('getCourseDettail: ',error);
    return res.status(500).send({error,content:null});
  }


}


