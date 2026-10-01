import {
  CAR_BRANDS,
  VALID_TRANSMISSIONS,
  VALID_FUEL_TYPES,
  VALID_CONDITIONS } from
'../data/carData.js';

export function validatePredictionInput(body) {
  const errors = [];
  const { brand, model, year, mileage, engineSize, transmission, fuelType, condition } = body;

  if (!brand || typeof brand !== 'string') {
    errors.push('`brand` is required and must be a string.');
  } else {
    const brandEntry = CAR_BRANDS.find((b) => b.name === brand);
    if (!brandEntry) {
      errors.push(`Unknown brand "${brand}". Valid brands: ${CAR_BRANDS.map((b) => b.name).join(', ')}.`);
    } else if (!model || !brandEntry.models.includes(model)) {
      errors.push(`Invalid model "${model}" for brand "${brand}". Valid models: ${brandEntry.models.join(', ')}.`);
    }
  }

  const yearNum = Number(year);
  if (!year || isNaN(yearNum) || yearNum < 2010 || yearNum > 2025) {
    errors.push('`year` must be a number between 2010 and 2025.');
  }

  const mileageNum = Number(mileage);
  if (mileage === undefined || isNaN(mileageNum) || mileageNum < 0 || mileageNum > 1000000) {
    errors.push('`mileage` must be a non-negative number (max 1,000,000 km).');
  }

  const engineNum = parseFloat(engineSize);
  if (!engineSize || isNaN(engineNum) || engineNum < 0.6 || engineNum > 8.0) {
    errors.push('`engineSize` must be a number between 0.6 and 8.0 (litres).');
  }

  if (!transmission || !VALID_TRANSMISSIONS.includes(transmission)) {
    errors.push(`\`transmission\` must be one of: ${VALID_TRANSMISSIONS.join(', ')}.`);
  }

  if (!fuelType || !VALID_FUEL_TYPES.includes(fuelType)) {
    errors.push(`\`fuelType\` must be one of: ${VALID_FUEL_TYPES.join(', ')}.`);
  }

  if (!condition || !VALID_CONDITIONS.includes(condition)) {
    errors.push(`\`condition\` must be one of: ${VALID_CONDITIONS.join(', ')}.`);
  }

  return errors;
}