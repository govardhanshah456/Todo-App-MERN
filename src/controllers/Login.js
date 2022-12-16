import { check, validationResult } from "express-validator"
import User from "../models/User.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { jwt_secret_key } from "../utils/secret_key.js";
import { jsonGenerate } from "../utils/jsonGenerate.js";
export const Login=async (req,res)=>{
    const errors=validationResult(req);
    
    if(errors.isEmpty()){
        try{
        const {email,password}=req.body;
        const checker=await User.findOne({email});
        console.log(checker);
        if(!checker){
            res.json({"Error":"Email does not exist"});
            return;
        }
        else{
            console.log(checker.password,password);
            const check1=bcrypt.compareSync(password,checker.password);
            console.log(check1);
            if(!check1){
                return res.json({"message":"Password is incorrect"});
                
            }
            const token=Jwt.sign({userId:check1._id},jwt_secret_key);
            res.json(jsonGenerate(200,"Success",{userId:check1._id,token}));
        }
    }
    catch(e){
            res.json({"Error":e.message});
            return;
        }
    }
    else
        res.json(errors);
}