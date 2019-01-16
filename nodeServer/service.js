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
    conn.query('select * from employees', function(err, rows){
        if(err) return  err;

        if(rows.length > 0){
            for(let result in rows){
                if(rows[result].username === req.body.userName  && rows[result].password === req.body.password){
                    obj.username = rows[result].username;
                    obj.password = rows[result].password;
                    obj.stutes = 200;
                    return obj
                }
                // else if(rows[result].username != req.body.userName){
                //     obj.username = undefined;
                //     obj.stutes = 202;
                //     console.log(rows[result].username);
                // }else if(rows[result].password != req.body.password){
                //     obj.password = undefined;
                //     obj.stutes = 202;
                //     console.log(obj);
                // }
            }
        }
    });
    conn.end();
    console.log(obj);
    res.send(obj);
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
