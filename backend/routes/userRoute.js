
import express from "express";
import { register, signIn } from "../controllers/userController.js";
import { createPost} from "../controllers/postController.js";
import { authentication } from "../middleware/auth.js";

const router=express.Router();

router.post('/register',register)
router.post('/signin',signIn)


//post routes
router.post('/create',authentication,createPost)
export default router;