var express= require('express')
var app=express();

const {MongoClient}=require('mongodb')
//should be changed 
var connection="mongodb+srv://Osama-Subani:osama@cluster0.iqjg8p6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client=new MongoClient(connection)

const mydb= client.db('firstdb')  // should be changed 

const collection= mydb.collection('users') // should be changed


app.get("/", function(req,res) 
{ 
     res.send("hiii") 
}) 
 
app.get("/ibrahem",async(req,res)=>{ 
     //find  =>{}=>all 
     const users= await collection.find({}).toArray()  
     res.send(users) 
}) 
 
app.get("/ibrahem/:username",async(req,res)=>{ 
     //find  =>{}=>all 
     const users= await collection.findOne({'username':req.params.username})  
     res.send(users) 
}) 
 
var bodyParse= require('body-parser') 
 
var urlEncoded= bodyParse.urlencoded({extended:false}) 
 
app.get("/form", function(req,res) 
{ 
     res.sendFile(__dirname+"/login.html") 
}) 
 
var fs= require('fs') 
 
app.get("/userinfo", function(req,res){ 
     // var data=fs.readFileSync(__dirname+"/currentuser.txt") 
     // res.json(data) 
 
    var current= localStorage.getItem('currentUser')  //type of cash  
    res.json(data) 
}) 
 
app.post("/login",urlEncoded, async(req,res)=> 
{ 
      const finduser= await collection.findOne({'userName':req.body.userName}) 
      if (finduser)  
      {   //fs.writeFileSync(__dirname+"/currentuser.txt") 
          localStorage.setItem('currentUser', finduser) 
          res.sendFile(__dirname+"/userInfo.html") 
      } 
      else{ 
          res.sendFile(__dirname+"/signUp.html") 
      } 
}) 
 
 
app.post("/register",urlEncoded, async(req,res)=> 
{    //find  
     const createuser= await collection.insertOne({'userName': req.body.userName}) 
     res.send("register") 
     
}) 
 
 
 
 
 
var server= app.listen(9000,function() 
{ 
     var host = server.address().address 
     var port=server.address().port 
 
     console.log("start my one") 
})