import {Response,Request,NextFunction} from 'express';
import {httpError} from '../helpers/handleError';
import prisma from '../models/prisma';
import bcrypt from 'bcrypt' ;
import jwt from 'jsonwebtoken';


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
        const passwordHash=await encryptPass(password);

        if(!exist){

            const user = await prisma.user.create({
              data: {
                name: name,
                lastName: lastName,
                email: email,
                passwordHash: passwordHash,
                userName: userName,
              }
            });

             const userToken = {
               id: user!.id,
               userName: user!.userName,
             };

             const token = jwt.sign(
               userToken,
               process.env.SECRET || "secreto?"
             );


            return res.send({
              error: null,
              content: {
                userName: user!.userName,
                email: user!.email,
                token,
                name: user!.name,
              },
            });

        }else{
            return res.send({error:'User already exists',content:null})
        }

    }catch(err){
        httpError(res,err)

    }


}

export const getUser= async(req: Request, res: Response, next: NextFunction)=>{

    const {password,userName} = req.body;
    console.log(password,userName);

    try{
        
        const user = await prisma.user.findUnique({
          where: {
            userName: userName,
          },
        });

        const isCorrectPass= user ? await validatePass(password,user.passwordHash): false;

        if(!isCorrectPass){
            return res.status(404).send({error:'password or username invalid',content:null});
        }

        const userToken={
            id:user!.id,
            userName:user!.userName

        }

        const token=jwt.sign(userToken,process.env.SECRET|| 'secreto?')

        console.log('pass: ',isCorrectPass);
        console.log("user : ", user);
        return res.send({error:null,content:{
            userName:user!.userName,
            email:user!.email,
            token:token,
            name:user!.name,
        }});

    }catch(err){

        const error:string='El usuario no fue encontrado';
        httpError(res,error)
    }   
}


const encryptPass=async(pass:string):Promise<string>=>{

    const salt=await bcrypt.genSalt(10);
    return await bcrypt.hash(pass,salt)
}

const validatePass=async(pass:string,hash:string):Promise<boolean>=>{

    return await bcrypt.compare(pass,hash);

}








