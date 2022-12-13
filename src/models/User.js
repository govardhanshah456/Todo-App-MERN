import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        min:1,
        max:30
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        max:30,
        min:8
    },
    date:{
        type:Date,
        default:Date.now
    }
})
export default mongoose.model("User",UserSchema);