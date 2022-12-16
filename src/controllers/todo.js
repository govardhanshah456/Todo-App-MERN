import {validationResult} from "express-validator";
import Todo from "../models/Todo.js";
import User from "../models/User.js";
import { jsonGenerate } from "../utils/jsonGenerate.js";
const createTodo=async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.json(jsonGenerate(202,"Todo is required",errors.array()));
    }
    try{
        const result=await Todo.create({
            userId:req.userId,
            desc:req.body.desc
        });
        if(result){
            const user= await User.findOneAndUpdate({_id:req.userId},{
                $push:{todos:result}
            });
            return res.json(jsonGenerate(200,"Todo Created Successfully",result));
        }
    }
    catch(err){
        return res.json(jsonGenerate(400,"Something went wrong",result));
    }
}
export default createTodo;