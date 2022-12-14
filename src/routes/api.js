import express from "express";
import { Login } from "../controllers/Login.js";
import Register from "../controllers/Register.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";
const apiRoute=express.Router();
apiRoute.post("/register",RegisterSchema,Register);
apiRoute.post("/login",LoginSchema,Login)
export default apiRoute;
