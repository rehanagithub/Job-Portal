

import jobModel from "../models/jobModel.js"
export const createjobController=async(req,res,next)=>{
    try{
    const {company,position,jobType}=req.body

    if(!company || !position){
        next('Please provide values')
    }

    if(jobType==='T'){
        next("Teaching job is not allowed")
    }
    const newJob={
        company,
        position,
        jobType
    }

    const job=await jobModel.create(newJob)
    res.status(200).json({
        success:true,
        message:'Job added successfully'
    })

}catch(e){

}
}

export const getAllJobController=async(req,res,next)=>{

    try{
    const jobs=await jobModel.find();
    res.status(200).json({
        success:'true',
        jobs,
        totalJobs:jobs.length
    })
}catch(err){


}
}

export const updateJobController=async(req,res,next)=>{
    try{
        const {id}=req.params
        const{workLocation,position}=req.body

        if(!workLocation || !position){
            next('please provide all fields')
        }
        const job=await jobModel.find({_id:id})

        if(!job){
            next(`no job found with this id ${id}`)
        }

        const updateJob=await jobModel.findOneAndUpdate({_id:id},{
            workLocation:workLocation,
            position:position
        })
        res.status(200).json({
            updateJob
        })
    }catch(e){
        
    }
}


export const deleteJobController=async(req,res,next)=>{
    try{
        const {id}=req.params
        const job=await jobModel.findOne({ _id:id})

        if(!job){
            next("No job found")
        }
        await job.deleteOne({ _id:id});

        res.status(200).json({
           message:"Success,Job deleted"
        })
    }catch(e){
        
    }
}