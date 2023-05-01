import express from "express"
import testing from "../controllers/controller.js"

const route=express.Router()

route.get('/',testing)

export default route