const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8889;

app.post('/api/login',function(req,res){
    console.log(req.body)

    res.send('11111').end();
});

app.get('/',function(req,res){
    console.log('进来了')
    res.end('hello word！\n');
});


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(8889,function afterListen(){
    console.log('listen to http://localhost:8889');
});
