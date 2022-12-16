import mongoose from "mongoose";

const TodoSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    desc:{
        type:String,
        requirec:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
        requirec:true
    },
    date:{
        type:Date,
        default:Date.now,
    },
})
export default mongoose.model("Todo",TodoSchema);