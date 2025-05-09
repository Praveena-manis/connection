import mongoose from "mongoose";

export const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected');
        
    } catch (error) {
        console.log('Error while Connecting DB',error);   
    }
}