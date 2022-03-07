
import { Response } from "express";


export const httpError=(res:Response,error:any) => {

    console.error('httpError: ',error);
    return res.status(500).send({error:error.error})

}