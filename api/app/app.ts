
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routers from './routes/index';
console.log('APP_APP:TS')

dotenv.config();

const app:express.Application = express();    

app.use(cors());
app.use(express.json());

app.use('/api/',routers);



export default app;