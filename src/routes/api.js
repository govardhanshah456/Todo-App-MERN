import express from "express";
import Register from "../controllers/Register.js";
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";
const apiRoute=express.Router();
apiRoute.post("/register",RegisterSchema,Register);
export default apiRoute;