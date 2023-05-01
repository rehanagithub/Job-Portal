import userModel from '../models/userModel.js'
import bcrypt from 'bcryptjs'
export const registerController = (req, res,next) => {

    try {
        const { name, email, password } = req.body
        if (!name) {
            next('name is required')
        }
        if (!email) {
            next('email is required')
        }
        if (!password) {
            next('please provide the password')
        }
        // const existingUser = userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Email is already there'
            })
        }

        const newUser={
            name:name,
            email:email,
            password:password
        }

        const user=userModel.create(newUser)
        res.status(200).send({
            success:true,
            message:"User is registered successfully",
            user
        })
    } catch(err) {

        next('Error in register controller')

    }

}

export const loginController=async (req,res,next)=>{
    try{

        const {email,password}=req.body

        if(!email || password){
            next('provide all fields')
           
        }
        const user= await userModel.findOne({email})

        if(!user){
            next('Email is not found')
            
        }
        const isPassword=bcrypt.compareSync(password,user.password)
        if(!isPassword){
            res.status(400).json({
                success:false,
                message:'password incorrect'
            })
        }
        res.status(200).json({
            success:true,
            message:'Login successfully',
            user
        })
    }catch(err){

    }
}


