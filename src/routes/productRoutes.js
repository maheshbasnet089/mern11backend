import express from 'express';
import { createProduct, getAllProduct, getProductById} from '../controllers/productControllers.js';

const router = express.Router()

router.get('/product', getAllProduct)
router.post('/',createProduct)
router.get('/product/:id',getProductById)







export default router;


