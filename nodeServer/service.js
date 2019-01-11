const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'guang888',
    database : 'mydatabase'
});



// const port = process.env.PORT || 8889;

app.post('/api/login',function(req,res){
    conn.connect();
    conn.query('select * from employees', function(err, rows){
        if(err) return  err;
        if(rows.length > 0){
            for(let res in rows){
                if(rows[res].username === req.body.username  && rows[res].password === req.body.password){
                    res.send({status: 200, username: req.body.username, role: req.body.role})
                }else{
                    res.send({status: 201, username: 'undefined'})
                }
            }
        }
    });
    res.end();
});



app.get('/',function(req,res){
    res.end('hello word！\n');
});


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(8889,function Listen(){
    console.log('listen to http://localhost:8889');
});
