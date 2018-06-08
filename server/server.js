var express = require('express');
var bodyParser = require('body-parser');



var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');

var app = express();
  
app.use(bodyParser.json());

app.post('/users',(req,res)=>{
  // console.log(req.body);
  var users = new Users({
      email : req.body.email,
      password:req.body.password
  });
  
  users.save().then((doc)=>{
  res.send(doc);
  }, (e) => {
   res.status(400).send(e);
  });
  });
  
  app.get('/users',(req,res)=>{
    Users.find().then((users)=>{
     res.send({users});
    }, (e)=>{
      res.status(400).send(e);
    })
  });
  
  
  app.listen(3000,()=>{
      console.log('Started on port 3000');
  });
  
  




//todo (or)

// var todo = new Todo({
//     text : req.body.text
// });

// todo.save().then((doc)=>{
// res.send(doc);
// }, (e) => {
//  res.status(400).send(e);
// });
// });

// app.get('/todos',(req,res)=>{
//   Todo.find().then((todo)=>{
//    res.send({todos});
//   }, (e)=>{
//     res.status(400).send(e);
//   })
// });


// app.listen(3000,()=>{
//     console.log('Started on port 3000');
// });

