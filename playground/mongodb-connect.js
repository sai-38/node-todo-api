// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'sai', age: 20};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err){
     return   console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');

//  db.collection('Todos').insertOne({
//     text:'Something to do',
//     Year : 1998
//  },(err,result)=>{
//    if (err){
//        return console.log('Unable to insert todo', err);
//    }

//    console.log(JSON.stringify(result.ops,undefined,2));
//  });

// db.collection('Users').insertOne({
//     Name :'Saiteja',
//     Age : 20,
//     Location :'Warangal',
// },(err,result)=>{
//     if(err){
//         return console.log('Unable to insert Users',err);
//     }
//     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
// })
    db.close();
} );