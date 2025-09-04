import mongoose from "mongoose";

const connectDB=()=>{
    try {
        mongoose.connect(process.env.MONOGO_URI)
        console.log('Connected to DB Less Goo');
        
    } catch (error) {
        console.log(error);
        
    }
}

export default connectDB