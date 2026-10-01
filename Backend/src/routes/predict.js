import { Router } from 'express';
import axios from 'axios';
import { CAR_BRANDS, YEARS, FEATURE_IMPORTANCE } from '../data/carData.js';
import { validatePredictionInput } from '../utils/validateInput.js';
import { calculateValuation } from '../utils/pricingEngine.js';

const router = Router();

router.get('/brands', (req, res) => {
  const brands = CAR_BRANDS.map(({ name, logo, country, models }) => ({
    name,
    logo,
    country,
    models
  }));
  res.json({ success: true, data: brands });
});

router.get('/years', (req, res) => {
  res.json({ success: true, data: YEARS });
});

router.get('/features', (req, res) => {
  res.json({ success: true, data: FEATURE_IMPORTANCE });
});

router.post('/', async (req, res) => {
  const errors = validatePredictionInput(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  try {
    const mlServiceUrl = process.env.ML_INFERENCE_URL || 'http://localhost:8000/predict';

    const mlResponse = await axios.post(mlServiceUrl, req.body, { timeout: 3000 });

    if (mlResponse.data && mlResponse.data.prediction) {
      const baseResult = calculateValuation(req.body);
      baseResult.estimatedPrice = mlResponse.data.prediction[0];
      baseResult.priceRange.low = Math.round(baseResult.estimatedPrice * 0.95);
      baseResult.priceRange.high = Math.round(baseResult.estimatedPrice * 1.05);
      return res.status(200).json({ success: true, data: baseResult, source: 'ml-inference' });
    }
  } catch (error) {
    console.warn(`[ML-INFERENCE] Failed to reach ML service, falling back to local engine: ${error.message}`);
  }

  const result = calculateValuation(req.body);

  return res.status(200).json({ success: true, data: result, source: 'local-engine' });
});

export default router;