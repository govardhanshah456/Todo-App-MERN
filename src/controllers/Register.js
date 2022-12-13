import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/jsonGenerate.js";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import Jwt from "jsonwebtoken";
import {jwt_secret_key} from "../utils/secret_key.js"
const Register=async (req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        res.json(jsonGenerate(201,"validation Error",error.array()));
        return;
    }
    const {name,email,password}=req.body;
    const salt= await bcrypt.genSalt(10);
    const hashPass=await bcrypt.hash(password,salt);
    try{
        const exists=await User.findOne({
            email
        })
        if(exists)
        {
            res.json(jsonGenerate(202,"Email Already Exist"));
            return;
        }
        const result=await User.create({
            name,email,password
        });
        const token=Jwt.sign({userId:result._id},jwt_secret_key);
        res.json(jsonGenerate(200,"Registration Successfull",{userId:result._id,token}));
    }
    catch(e){
        res.json(jsonGenerate(202,"Error Occured"));
    }
}
export default Register;