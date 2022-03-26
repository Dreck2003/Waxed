import {
  Request as Req,
  Response as Res,
  NextFunction as Next,
  Router,
} from "express";

import prisma from '../models/prisma';


export const createTask=async(req:Req, res:Res, next:Next)=>{

    const text=req.body.text;

    try{
        console.log(req.body);

        const newTask=await prisma.task.create({
            data:{text}
        })
        console.log(newTask);
        return res.send({error:null,content:newTask});

    }catch(error){
        console.log('error es createTask: ',error);
        res.status(500).send({error:error})

    }


}

export const deleteTask = async(req: Req, res: Res, next: Next)=>{

    const id=req.params.id;

    try{
        console.log(id);

        const oldTask=await prisma.task.delete({where: {id:Number(id)}});
        console.log(oldTask);
        return res.send({error:null,content:oldTask})



    }catch(error){
        console.log('error en delete Task : ',error);
        return res.status(500).send({error:error});
    }


}
export const tachTask=async(req:Req, res:Res, next:Next) =>{

    const id=req.body.id;
    const tach=req.body.tach;
    try{
        console.log(req.body);

        if(!id || ! tach || typeof tach ==='boolean') return res.status(404).send({ error: "bad fields" });
        const newTaskTach=await prisma.task.update({
            where:{id:Number(id)},
            data:{tach}
        })
        console.log(newTaskTach);
        return res.status(200).send({error:null,content:newTaskTach})


    }catch(error){
        console.log('errro en tach-Task: ',error);
        return res.status(500).send({error:error});
    }

}

export const getTasks=async(req:Req, res: Res, next: Next)=>{

    try{

        const tasks=await prisma.task.findMany();

        return res.send({error:null,content:tasks});


    }catch(error){
        console.log('error en getTasks: ',error);
        return res.status(500).send({error:error});
    }


}