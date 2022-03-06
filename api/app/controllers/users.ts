import {Response,Request,NextFunction} from 'express';
import {httpError} from '../helpers/handleError';
import prisma from '../models/prisma';


export const createUser= async(req: Request, res: Response, next: NextFunction)=>{

    console.log(req.body);
    const {name,lastName,email,password,userName} = req.body;

    try{
        const exist=await prisma.user.findUnique({
            where:{
               email: email
            }
        })
        console.log('17 userCREATE: ',exist);

        if(!exist){
            const user=await prisma.user.create({
            data:{
                name:name,
                lastName:lastName,
                email:email,
                password:password,
                userName:userName,
                }
            })
            return res.send(user)

        }else{
            return res.send({error:'User already exists'})
        }

    }catch(err){
        httpError(res,err)

    }


}
export const getUser= async(req: Request, res: Response, next: NextFunction)=>{

    const {password,userName} = req.body;


    try{
        
        const user = await prisma.user.findUnique({
            where:{
                password: password
            },
            select:{
                userName:true,
                name:true,
                lastName:true,
            }
        })

        console.log('61-GET_USER: ',user)

        if(!user){
            return res.status(404).send({error:'Invalid username or password'})
            
        }
        if(user.userName===userName){
            return res.send(user);
        }
        return res.send('algo paso')


    }catch(err){

        const error:string='El usuario no fue encontrado';
        httpError(res,error)
    }
    
    
}








