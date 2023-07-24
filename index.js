const https = require("https");
const express = require("express");
const request = require("request");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public/"))
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})


app.post("/success",function(req,res){
    const Email = req.body.Email;
    const password = req.body.password;
    // const data = {members:[{email_address:Email,status:subscribe}]};
    // const ChimpData = JSON.stringify(data);
    // https.request()
    // res.write("The Email id of the user is " + Email);
    // res.write("The password of the current user is " + password);
    res.sendFile(__dirname + "/success.html");
})


app.listen(process.env.PORT || 3000,function(){
    console.log("Server is started at port 3000");
})