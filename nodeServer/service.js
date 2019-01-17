const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());






// const port = process.env.PORT || 8889;

app.post('/api/login',function(req,res){

    const conn = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '123456',
        database : 'mydatabase'
    });
    let obj = {};
    conn.connect();
    conn.query({
        sql :'select * from employees where username = ? and password = ?',
        timeout: 40000,
    },[req.body.userName,req.body.password], function(err, rows,fields){

        if(err) return  console.log(err);
        let result = JSON.parse(JSON.stringify(rows))[0];
                if(result.username === req.body.userName  && result.password === req.body.password){
                    obj.username = result.username;
                    obj.password = result.password;
                    obj.stutes = 200;
                }else {
                    obj.stutes = 201;
                }
    });

    conn.end(function (err) {
        if(err) return;
        res.send(obj);
    });

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
