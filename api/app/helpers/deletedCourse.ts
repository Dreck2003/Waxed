import { resolve } from 'path';
import prisma from '../models/prisma';

export const deleteFiles=async(id:number)=>{

    try{
        const deleted=await prisma.archive.deleteMany({
            where:{
                courseId:Number(id)
            }
        })
        console.log('FILES BORRADOS: ',deleted);
        return true;

    }catch(error){
        console.log('ERROR EN DELETE FILE: ',error);
        return false;
    }
}

export const deleteLinks=async(id:number)=>{
    try{
        const deleted=await prisma.link.deleteMany({
            where:{
                courseId:Number(id)
            }
        });
        console.log("LINKS BORRADOS: ", deleted);
        return true;

    }catch(error){
        console.log('ERROR EN DELETE LINKS: ',error);
        return false;
    }
}


export const courseDeleted=async(idCourse:number)=>{
    try{

        const isdeletedFiles=await deleteFiles(idCourse);
        const isdeletedLiks=await deleteLinks(idCourse);

        if(isdeletedFiles && isdeletedLiks){
            const deleted=await prisma.course.delete({
                where:{
                    id:Number(idCourse)
                }
            })
            return deleted;
        }
    }catch(error){
        console.log('ERROR EN DELETE COURSE : ',error);
        return false;
    }
}

