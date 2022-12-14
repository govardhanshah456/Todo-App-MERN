import { check, validationResult } from "express-validator"
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { jwt_secret_key } from "../utils/secret_key.js";
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
            const check1=bcrypt.compare(password,checker.password);
            console.log(check1);
            if(!check1){
                res.json({"message":"Password is incorrect"});
                return;
            }
            res.json({"Message":"Login Successful"});
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