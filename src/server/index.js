let express=require('express');
const path = require('path');

let app=express();

const DIST_DIR = path.join(__dirname, '../public'); // NEW

app.use(express.static(DIST_DIR));

app.get('/',(req,res) =>
{
    res.sendFile(path.resolve('src/public/index.html'));
});
app.get('/test', (req,res) =>{
    res.sendFile(path.resolve('src/public/index.html'));
});
app.get('/*', (req,res) =>{
    res.send('Hello World!');
});

let index=app.listen(3000,function() {});

