
import { Response } from "express";


interface HANDLERS{
    TokenExpiredError:any,
    default:any

}
interface ERRORES{
  ['']:string
}
interface ERROR extends ERRORES{
  name: string;
}

const ERROR_HANDLERS:HANDLERS = {
  TokenExpiredError:(res:Response,error:ERROR)=>res.status(400).send({error:'token invalid or missing',content:null}),
  default:(res:Response)=>res.status(500).end()
};




export const httpError=(res:Response,error:ERROR) => {

    console.log('error del nomber: ',error.name);
    // const errorName:string=error.name ||  'default';
    // const handler: any = ERROR_HANDLERS[errorName] || ERROR_HANDLERS.default;

    // return handler;
    console.log(error.name);

    switch(error.name){

      case 'TokenExpiredError':
        return res.status(400).send({error:'token invalid or missing',content:null});

      default:
        return res.status(500).end();
    }



}