//Quinto desfío entregable - Curso Backend - Esteban dos Santos Mello
const exp = require('constants');
const express = require('express');
const path = require('path');
const port = 8080;
const app = express();
const router = require('./routes/index');
const productos = require('./controller/productos')

app.listen(port,()=>{
    console.log('Server up, listening at port ',port);
});
app.on('error',(err)=>{
    console.log('Server interrupted', err);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.set('view engine','pug');
const viewsPath = path.resolve(__dirname,'../views');
app.set('views',viewsPath);

app.get('/',(req,res)=>{
    const Productos = productos.getAll();
    res.render('index', { Productos })
})

app.use('/api',router);