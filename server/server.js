const express = require("express");
const apirouter = require("./router/app_router.js");
const bodyParser = require("body-parser");
const http = express();
http.listen(3000,()=>{
    console.log("server port 3000");
})
http.use(bodyParser.urlencoded({extended:false}));
http.use("/api",apirouter)





http.all("*",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.sendFile(__dirname+req.url);
})