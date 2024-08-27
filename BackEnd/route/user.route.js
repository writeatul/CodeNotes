// import express from 'express'
// import { signup} from '../controller/user.controller.js';


// const router = express.Router()

// //now ppost request 

// router.post("/signup", signup)  //endpoint, fn to be run on signup end point


// export default router;

// //now import userroute in index.js

import express from "express";
import { login, signup } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);


export default router;