import {Request,Response,NextFunction} from 'express';

import {httpError} from '../helpers/handleError';
import prisma from '../models/prisma';

export const getCourses= async (req: Request, res: Response, next: NextFunction)=>{

    res.send('ok')


}
export const createCourse= async (req: Request, res: Response, next: NextFunction)=>{

    // console.log(req.headers);
    // console.log(req.body);
    const {name,content,userName}=req.body;

    try{

        const userCourse= await prisma.user.findUnique({
            where:{
                userName:userName
            }
        })
        console.log(userCourse);


        if(userCourse){
            const course=await prisma.course.create({
            data:{
                name:name,
                content:content,
                userId:userCourse.id
            }
            })
            return res.send(course)
            
        }

        return res.status(404).send({error:'Not exist user'})

        


    }catch(err){
        httpError(res,err)

    }

    res.send('ok')


}