import {Router,Request,Response} from 'express';

console.log('INDEX_ROUTES')


const router =Router();
import fs from 'fs';

const pathDir=`${__dirname}`

const nameOfFile=(file:string):string=>{
    
    return file.split('.').shift()!;
}

const skip=['index'];//Files to be skipped


fs.readdirSync(pathDir).forEach(file=>{

    const withoutExtension:string=nameOfFile(file);

    if(!skip.includes(withoutExtension)){
        console.log('cargando ----->',file);
        const rutas =require(`./${withoutExtension}`)
        router.use(`/${withoutExtension}`,rutas)

        // console.log(`${withoutExtension}`,require(`./${withoutExtension}`))
    }

})

router.get('*', (req:Request, res:Response) => {
    return res.send({
        error:'Not found'
    })

})


export default router;

