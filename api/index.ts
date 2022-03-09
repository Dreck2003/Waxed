import app from './app/app';
console.log('INDEX_APP');

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log('server running in the port : ',PORT);
});


