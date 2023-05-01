import express from "express"
import { createjobController, getAllJobController,updateJobController ,deleteJobController} from "../controllers/jobController.js"


const route=express.Router()

route.post('/create-jobs',createjobController)
route.get('/get-jobs',getAllJobController)

route.patch('/update-job/:id',updateJobController)

route.delete('/delete-job/:id',deleteJobController)


export default route