import {validationResult} from "express-validator"
import Todo from "../models/Todo.js";
import User from "../models/User.js";
import { jsonGenerate } from "../utils/jsonGenerate.js";
export const todoDelete=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.json(jsonGenerate(404,"Todo ID is required",errors.array()));

    }
    try{
        const result=await Todo.findByIdAndDelete(req.body.todo_id);
        if(result)
        {
            const user=await User.findByIdAndUpdate(req.userId,{
                $pull:{todos:req.body.todo_id}
            })
        }
        return res.json(jsonGenerate(200,"Success"))
    }catch(err){
        return res.json(jsonGenerate(404,"Error occured",err.message));
    }
}