import Todo from "../models/Todo.js"
import {validationResult} from "express-validator";
import { jsonGenerate } from "../utils/jsonGenerate.js";

export const markTodo=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.json(jsonGenerate(404,"Todo ID is required",errors.array()))
    }
    try{
    console.log(req.userId,req.body.todo_id);
    const todo=await Todo.findOneAndUpdate({
        _id:req.body.todo_id,
        userId:req.userId,
    },[{
        $set:{
            isCompleted:{
                $eq:[false,"$isCompleted"]
            }
        }
    }])
    if(todo)
        return res.json(jsonGenerate(200,"Success",todo));
     
}catch(err){
    return res.json(jsonGenerate(404,"Error",err.message));
}
}