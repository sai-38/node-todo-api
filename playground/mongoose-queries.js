const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users}= require('./../server/models/users');


// var id = '5b1a153ad89e291c29c1193a1';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) =>{
//     console.log('Todo By Id',todo);
// }).catch((e)=> console.log(e));

Users.findById('5b1a58476e4fce880bed1667').then((users)=>{
if (!users){
    return console.log('Unable to find user');
}
console.log(JSON.stringify(users, undefined, 2))
},
(e)=>{
    console.log(e);
})