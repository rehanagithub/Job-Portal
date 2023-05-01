import mongoose from "mongoose";

 const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URL)
            console.log("successfully connected to Mongodb")
        }catch(error){
            console.log(`Mongodb Error: ${error}`)

    }
}
export default connectDB