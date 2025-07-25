const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/miniproject")
const userSchema= mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    password:String,
     profilepic:{
                type:String,
                default :"default-profile-picture.webp"
            },
    posts:[
        {
           
            type:mongoose.Schema.Types.ObjectId , ref:"post"
        }
    ]
})

module.exports = mongoose.model('user' , userSchema);
