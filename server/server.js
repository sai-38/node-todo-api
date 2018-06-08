var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} =require('mongodb');


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
  
  //GET /users/123
  app.get('/users/:id', (req,res)=>{
    // res.send(req.params);
    var id =req.params.id;

if (!ObjectID.isValid(id)) {
  return res.status(404).send();
}
    // Valid id using isValid
    //404-send  back empty send

    Users.findById(id).then((users)=>{
     if (!users){
       return res.status(404).send();
     }

     res.send({users});
    }).catch((e)=>{
      res.status(400).send();
    })
    //fingById
    //success
    //error
      //400 - 
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

