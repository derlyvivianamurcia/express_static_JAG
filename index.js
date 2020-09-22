const express = require('express');
const path = require('path');
const app = express();

app.set('port', 4001);
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// funcion para archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

console.log(__dirname);

//adicionar la segunda pagina

app.use('/statics', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/home.html'))
});

app.listen(app.get('port'), ()=>{
    console.log('El servidor se encuentra en función 4001')
})