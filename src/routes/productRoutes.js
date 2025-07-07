import express from 'express';
import { newName, sayHello } from '../controllers/productControllers.js';

const router = express.Router()

router.get('/', sayHello)
router.post('/',newName)







export default router;


