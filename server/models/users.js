var mongoose = require('mongoose')


var Users = mongoose.model('Users',{
    email:{
        type: String,
        required: true,
        trim: true,
        minlenght:1
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlenght:1
    }
});

module.exports = {Users};
   