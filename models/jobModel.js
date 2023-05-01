import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({

    company:{
        type:String,
        required:[true,'Company name is required']
    },
    position:{
        type:String,
        required:true
    },
    workLocation:{
        type:String,
        default:'Delhi',
        required:true
    },
    workType:{
        type:String,
        default:'Remote'
    },
    jobType:{
        type:String,
        default:"Development",
        required:[true,"Work location is required"],
    }

    

   },
   {timestamps:true}
   )
export default mongoose.model('Job',jobSchema)