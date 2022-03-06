import app from './app/app';
console.log('INDEX_APP');
import prisma from './app/models/prisma';

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log('server running in the port : ',PORT);
});
