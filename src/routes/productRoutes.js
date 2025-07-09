import express from 'express';
import { createProduct, deleteProductById, getAllProduct, getProductById} from '../controllers/productControllers.js';

const router = express.Router()

router.get('/product', getAllProduct)
router.post('/',createProduct)
router.get('/product/:id',getProductById)
router.delete('/:id',deleteProductById)







export default router;


