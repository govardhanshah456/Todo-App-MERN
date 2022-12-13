import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import apiRoute from "./routes/api.js";

const app=express();
const conn=connectDB;
conn();
app.use(express.json());
app.use("/api/",apiRoute);
const PORT=8000;
app.listen(PORT, ()=>console.log(`Server is running on Port ${PORT}`));
