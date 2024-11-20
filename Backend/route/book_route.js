import express from 'express';
import { getBook } from '../contraller/book_controllre.js';

const router=express.Router();

router.get("/",getBook);
export default router;