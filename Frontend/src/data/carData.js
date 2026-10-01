export const CAR_BRANDS = [
{
  name: 'BMW',
  logo: 'B',
  country: 'Germany',
  models: ['X5', '3 Series', '5 Series', 'M4', 'X3', 'X7', 'i4'],
  basePrice: 6500000,
  depreciationRate: 0.12
},
{
  name: 'Mercedes-Benz',
  logo: 'M',
  country: 'Germany',
  models: ['C-Class', 'E-Class', 'GLC', 'GLE', 'S-Class', 'A-Class'],
  basePrice: 6800000,
  depreciationRate: 0.11
},
{
  name: 'Audi',
  logo: 'A',
  country: 'Germany',
  models: ['A4', 'A6', 'Q5', 'Q7', 'RS5', 'e-tron'],
  basePrice: 6200000,
  depreciationRate: 0.13
},
{
  name: 'Porsche',
  logo: 'P',
  country: 'Germany',
  models: ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
  basePrice: 12000000,
  depreciationRate: 0.08
},
{
  name: 'Tesla',
  logo: 'T',
  country: 'USA',
  models: ['Model 3', 'Model Y', 'Model S', 'Model X'],
  basePrice: 5500000,
  depreciationRate: 0.14
},
{
  name: 'Toyota',
  logo: 'TY',
  country: 'Japan',
  models: ['Fortuner', 'Camry', 'Innova Crysta', 'Land Cruiser', 'Urban Cruiser'],
  basePrice: 3400000,
  depreciationRate: 0.07
},
{
  name: 'Hyundai',
  logo: 'H',
  country: 'South Korea',
  models: ['Creta', 'Tucson', 'Verna', 'Ioniq 5', 'Venue', 'Alcazar'],
  basePrice: 1500000,
  depreciationRate: 0.09
},
{
  name: 'Honda',
  logo: 'HD',
  country: 'Japan',
  models: ['City', 'Civic', 'CR-V', 'Elevate', 'Accord'],
  basePrice: 1450000,
  depreciationRate: 0.08
},
{
  name: 'Tata',
  logo: 'TT',
  country: 'India',
  models: ['Safari', 'Harrier', 'Nexon', 'Punch', 'Curvv EV'],
  basePrice: 1700000,
  depreciationRate: 0.09
},
{
  name: 'Mahindra',
  logo: 'M',
  country: 'India',
  models: ['XUV700', 'Thar', 'Scorpio-N', 'XUV300'],
  basePrice: 1900000,
  depreciationRate: 0.08
}];


export const YEARS = Array.from({ length: 15 }, (_, i) => 2025 - i);

export const FEATURE_IMPORTANCE = [
{ name: 'Engine Size', percentage: 15.8, color: 'from-blue-500 to-cyan-400' },
{ name: 'Mileage', percentage: 14.2, color: 'from-blue-600 to-blue-400' },
{ name: 'Year', percentage: 13.2, color: 'from-indigo-500 to-blue-500' },
{ name: 'Transmission', percentage: 4.5, color: 'from-sky-500 to-blue-400' },
{ name: 'Fuel Type', percentage: 3.0, color: 'from-teal-500 to-cyan-400' },
{ name: 'Condition', percentage: 3.0, color: 'from-emerald-500 to-teal-400' }];


export function calculateMockValuation(data) {
  const currentYear = 2025;
  const brandInfo = CAR_BRANDS.find((b) => b.name === data.brand) || CAR_BRANDS[0];

  let price = brandInfo.basePrice;

  if (data.model === 'X5') price = 8500000;else
  if (data.model === '3 Series' || data.model === 'C-Class' || data.model === 'A4') price = 4800000;else
  if (data.model === '911') price = 17500000;else
  if (data.model === 'City' || data.model === 'Verna') price = 1500000;else
  if (data.model === 'Creta' || data.model === 'Nexon') price = 1600000;else
  if (data.model === 'Fortuner') price = 4200000;else
  if (data.model === 'XUV700') price = 2400000;

  const age = Math.max(0, currentYear - Number(data.year || 2020));
  const depRate = brandInfo.depreciationRate || 0.10;
  const yearMultiplier = Math.pow(1 - depRate, age);
  price = price * yearMultiplier;

  const expectedMileage = age * 12000;
  const actualMileage = Number(data.mileage || 45000);
  const mileageDiff = actualMileage - expectedMileage;
  if (mileageDiff > 0) {
    price = price * Math.max(0.65, 1 - mileageDiff / 10000 * 0.012);
  } else {
    price = price * Math.min(1.15, 1 + Math.abs(mileageDiff / 10000) * 0.008);
  }

  const engine = parseFloat(data.engineSize || '3.0');
  if (engine >= 3.0) price *= 1.12;else
  if (engine >= 2.0) price *= 1.05;else
  if (engine <= 1.2) price *= 0.94;

  if (data.transmission === 'Automatic') price *= 1.06;

  if (data.fuelType === 'Electric') price *= 1.08;else
  if (data.fuelType === 'Hybrid') price *= 1.05;else
  if (data.fuelType === 'Diesel') price *= 1.02;

  if (data.condition === 'New') price *= 1.15;else
  if (data.condition === 'Like New') price *= 1.04;else
  if (data.condition === 'Used') price *= 0.92;

  const finalPrice = Math.round(price / 5000) * 5000;
  const lowerRange = Math.round(finalPrice * 0.96 / 5000) * 5000;
  const upperRange = Math.round(finalPrice * 1.04 / 5000) * 5000;

  return {
    price: finalPrice,
    lowerRange,
    upperRange,
    reliabilityScore: 94.2,
    confidenceTier: 'High Reliability',
    compCount: 468,
    marketTrend: '+1.4% vs last quarter'
  };
}

export function formatINR(val) {
  if (!val) return '₹0';
  const num = Number(val);
  return '₹' + num.toLocaleString('en-IN');
}