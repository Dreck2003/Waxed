import prisma from '../models/prisma';

export const ExistFile=async(courseId:number,nameFile:string):Promise<boolean>=>{

    try{

        const course=await prisma.course.findUnique({
            where:{id:Number(courseId)},
            select:{
                archive:true
            }
        });

        const isFileExist=course!.archive.find(course=>course.name===nameFile);

        return isFileExist ? true :false;

    }catch(error){
        console.log('ERRRO AL VARIFICA EL ARCHIVO: ',error);
        return false
    }

}
