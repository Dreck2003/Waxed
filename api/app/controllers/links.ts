import {Request as Req,Response as Res,NextFunction as Next} from 'express';
import prisma from "../models/prisma";


export const createLink=async(req:Req, res:Res, next: Next)=>{

    const {nameLink,url,courseId}=req.body;

    if(!nameLink || !url || ! courseId) return res.send({error:'Missing fields',content:null});

    try{

        const newLink= await prisma.link.create({
            data:{
                name:nameLink,
                url:url,
                courseId
            }
        });
        console.log('el nuevo link es: ',newLink)

        if(!newLink) return res.send({error:'newLink Not found',content:null});
        return res.send({error:null,content:newLink})


        
    }catch(error){
        console.error('createLinks: ',error);

        return res.send({error:error,content:null})
    }

}

export const deleteLink=async(req: Req, res: Res,next: Next)=>{

    const {idLink}=req.body;

    if(!idLink) return res.send({error:'nameLink not exist',content:null});

    try{
        const linkExist=await prisma.link.findUnique({
            where:{id:idLink}
        });

        if(!linkExist) return res.status(404).send({error:'link not exist',content:null});


        const oldLink=await prisma.link.delete({
            where:{
                id:idLink
            },
            select:{
                name:true,
                url:true
            }
        })            

        if(!oldLink) return res.send({error:'Link not exist?',content:null});

        return res.send({error:null,content:oldLink})

    }catch(error){
        console.error(error);
        return res.send({error, content:null})
    }

}