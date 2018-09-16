var express = require('express');

//var socket=require('socket.io');
var app=express();
//listening means setting up the server
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static('public'));
//var io= socket(server);
//io.on('connection',function(socket){
  //console.log("made socket connection");
//});
var server=app.listen(4000,function(){
  console.log('listening to 4000');
});
var main_func= require('/home/aman/Desktop/scrap/main.js');
var user_arr=[];
app.get('/login.html',function(req,res){
        //res.render('todo',{tasks: data});
       console.log(req.url);
       //console.log(req.body);
    //  res.render('todo',{tasks: rows});
  });
  app.post('/login.html',function(req,res){
     console.log("jes");
     ////console.log(req.url);
	// var name = req.body.name;
	 //var color = req.body.pass;
     //console.log("here");
	// console.log(name);
	 //console.log(color);
	 //console.log(req.body.opt);
  // console.log(req.body);
    obj=new main_func.Blockchain(3,req.body.pass);
    user_arr.push(obj);
    //console.log(obj);
  // ans=obj.display();
    //console.log(obj.chain[0]);
  });
  app.post('/signup.html',function(req,res){
     //console.log("jes");
     //console.log(req.url);
  // var name = req.body.name;
   //var color = req.body.pass;
     //console.log("here");
   //console.log(name);
   //console.log(color);
   //console.log(req.body.opt);
   obj=new main_func(3,req.body.pass);
   console.log(obj.chain[0]);
  // res.send("yes");
   //console.log(req.body);
   res.redirect('/home.html');
  });
  app.post('/home.html',function(req,res){
    res.send("were here");
  })
  console.log(user_arr[0]);
