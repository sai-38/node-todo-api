// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID,} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err){
     return   console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');



 
// db.collection('Todos').findOneAndUpdate({
//   _id : new ObjectID('5b17b40f63f0fa6ab16627af')
// },{
//     $set:{
//         completed:true 
//     }
// },{
//     returnOriginal : false
// }).then((results)=>{
//   console.log(JSON.stringify(results,undefined, 2));
// });

db.collection('Users').findOneAndUpdate({
   _id : new ObjectID('5b18d1198cb94a1e10e873da')
},{
    $set:{
        Name:('Anishetty')
    },
    $inc:{
        Age : 1
    }
},{
    returnOriginal : false
}).then((results)=>{
    console.log(JSON.stringify(results,undefined, 2));
});
    // db.close();
} );