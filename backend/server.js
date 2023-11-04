const express = require("express");
const dotenv = require("dotenv");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { chats } = require("./data/data");
const app = express();
dotenv.config();

app.get('/', (req,res) =>{
    res.send("API is Running Successfully");
});

app.get('/api/chat',(req,res) =>{
    res.send(chats)
});

app.get('/api/chat/:id',(req,res) =>{
 //   console.log(req.params.id);
      const singlechat = chats.find((c) => c._id === req.params.id);
      res.send(singlechat);
});

const port = process.env.port || 5000


app.listen(5000, console.log('server started on port 5000 ${port} '));