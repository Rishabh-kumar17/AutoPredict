import { Router } from 'express';
import predictRouter from './predict.js';

const router = Router();

router.use('/predict', predictRouter);

export default router;