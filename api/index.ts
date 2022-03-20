import app from './app/app';
console.log('INDEX_APP');
import express from 'express';

const PORT = process.env.PORT || 3001;

app.use(express.static('public'))

app.listen(PORT,()=>{
    console.log('server running in the port : ',PORT);
});


