const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded());
app.get('/login',(req,res,next)=>{
    
    res.sendFile(__dirname+'/index.html','utf-8',(err,text)=>{
        if(err){
            console.log('error');
        }else{

            res.send(text);
            next();
            const value  = req.name.value;
            localStorage.setItem("name",value);
            console.log(value);
            res.redirect('/');
           
            //next();
        }      
    });
})
app.get('/',async (req,res,next)=>{
    
    res.sendFile(__dirname+'/chat.html','utf-8',(err,text)=>{
        if(err){
            console.log('error');
        }else{
            res.send(text);
            const value = req.body.message;
            fs.appendFileSync('file.txt',value);
        }      
    });
})
app.listen(4000,()=>{
    console.log('server started');
})