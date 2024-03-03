const mongoose=require("mongoose");

const connect = mongoose.connect("mongodb://localhost:27017/snydergames");

// check connection

connect.then(()=>{
    console.log("Database is connected");
})
.catch(()=>{
    console.log("Database cant be connected");
});

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

// collection Part
const collection = new mongoose.model("users",LoginSchema);

module.exports=collection;


