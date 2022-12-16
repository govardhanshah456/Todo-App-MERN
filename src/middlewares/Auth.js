import Jwt from "jsonwebtoken";
import  { jsonGenerate } from "../utils/jsonGenerate.js";
import { jwt_secret_key } from "../utils/secret_key.js";

const auth=(req,res,next)=>{
    const token=req.headers["auth"];
    if(token==undefined){
        return res.json(jsonGenerate(202,"Access Denied"));
    }
    try{
        console.log(token);
        const decode=Jwt.verify(token,jwt_secret_key);
        console.log(decode.userId);
        req.userId=decode.userId;
        return next();
    }
    catch(err){
        return res.json(jsonGenerate(203,"Invalid Token"))
    }
}
export default auth;