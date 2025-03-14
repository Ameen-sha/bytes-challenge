// File: /routes/productRoutes.js
import express from 'express';
import { searchProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('/search', searchProducts);

export default router;
