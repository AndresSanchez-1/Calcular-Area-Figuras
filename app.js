import express from 'express';
import { join } from 'path';
import appRouter from './Routes/router.js ';

const app=express();
const port=3000;

app.set('view engine','ejs');
app.set('views', 'views');
app.use(express.static(join('./public')));
app.use(express.urlencoded({ extended:true }))

app.use('/', appRouter);

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
});
