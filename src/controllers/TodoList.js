import User from "../models/User.js"
import { jsonGenerate } from "../utils/jsonGenerate.js";

export const GetTodos=async (req,res)=>{
    try{
    const list=await User.findById(req.userId)
    .select("-password")
    .populate("todos")
    .exec();
    return res.json(jsonGenerate(200,"Todos Of User",list));
    }
    catch(err){
        return res.json(jsonGenerate(404,"Error occured"));
    }
}