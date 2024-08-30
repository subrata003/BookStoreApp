import express from "express"
import { signup ,login_data} from "../controller/user.controller.js"
// import {login_data} from "../controller/user.controller.js"
const router=express.Router()
router.post("/singup",signup)
router.post("/login",login_data)

export default router