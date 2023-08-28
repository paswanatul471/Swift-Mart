import express from 'express';

import { userSingUp, userLoginUp } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { addPaymentGateway } from '../controller/payment-controller.js';

const router = express();

router.post('/singup', userSingUp);
router.post('/login', userLoginUp);
router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.post('/payment', addPaymentGateway)

export default router;