import mongoose from 'mongoose';
import { db_url } from '../utils/ul.js';
function connectDB() {
    // Database connection 🥳
    mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true,});
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    })
    connection.on('error',()=>{
        console.log('Database not connected 🥳🥳🥳🥳');
    })
}

// mIAY0a6u1ByJsWWZ

export default connectDB;