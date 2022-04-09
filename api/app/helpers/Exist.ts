import prisma from '../models/prisma';


export const CourseExist=async(userName:string,courseName:string):Promise<boolean>=>{

    try{

        const courses=await prisma.user.findFirst({
            where:{userName},
            select:{
                course:true
            }
        });
        if(!courses) return false;

        const courseExist=courses.course!.filter(course=>course.name===courseName);
        console.log('courses: ',courses);
        console.log('course Encontrado: ',courseExist);

        return courseExist.length ? false : true;

    }catch(error){
        console.log('Error en CourseExist: ',error);
        return false;
    }


}
