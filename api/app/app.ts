
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routers from './routes/index';
import morgan from 'morgan';


dotenv.config();

const app:express.Application = express();

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))


app.use('/api/',routers);



export default app;