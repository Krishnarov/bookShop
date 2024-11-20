import express from 'express'
import { login, signup } from '../contraller/user.controllre.js'
const router=express.Router();

router.post('/signup',signup);
router.post('/login',login);

export default router;