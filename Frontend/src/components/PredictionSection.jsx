import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CarProfile, CaretDown, Speedometer, GasPump, SlidersHorizontal, Sparkle, Spinner
} from '@phosphor-icons/react';
import { CAR_BRANDS, YEARS } from '../data/carData';
import PredictionResult from './PredictionResult';

function SelectField({ label, icon: Icon, id, value, onChange, options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find(opt => (opt.value ?? opt) === value)?.label ?? value;

  return (
    <div className="flex flex-col gap-2" ref={dropdownRef}>
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
        {Icon && <Icon weight="duotone" className="w-4 h-4 text-blue-500" />}
        {label}
      </label>
      <div className="relative">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-white border ${isOpen ? 'border-blue-500 ring-2 ring-blue-100' : 'border-slate-200 hover:border-blue-400'} rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-all cursor-pointer shadow-sm flex items-center justify-between`}
        >
          <span className={value ? "text-slate-800" : "text-slate-400 font-medium"}>
            {value ? selectedLabel : placeholder}
          </span>
          <CaretDown weight="bold" className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden max-h-60 overflow-y-auto hide-scrollbar origin-top"
            >
              <div className="p-1.5">
                {options.length === 0 && (
                  <div className="px-4 py-3 text-sm text-slate-400 italic text-center">No options available</div>
                )}
                {options.map((opt) => {
                  const optValue = opt.value ?? opt;
                  const optLabel = opt.label ?? opt;
                  const isSelected = optValue === value;
                  return (
                    <div
                      key={optValue}
                      onClick={() => {
                        onChange(optValue);
                        setIsOpen(false);
                      }}
                      className={`px-3 py-2.5 my-0.5 rounded-lg text-sm cursor-pointer transition-colors flex items-center justify-between ${isSelected ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-medium'}`}
                    >
                      {optLabel}
                      {isSelected && <Sparkle weight="fill" className="w-3.5 h-3.5 text-blue-500" />}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function NumberField({ label, icon: Icon, id, value, onChange, placeholder, min, max, step }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
        {Icon && <Icon weight="duotone" className="w-4 h-4 text-blue-500" />}
        {label}
      </label>
      <input
        id={id}
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        className="w-full bg-white border border-slate-200 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-all shadow-sm font-medium"
      />
    </div>
  );
}

const INITIAL_FORM = {
  brand: '',
  model: '',
  year: '',
  mileage: '',
  engineSize: '',
  transmission: '',
  fuelType: '',
  condition: ''
};

export default function PredictionSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [result, setResult] = useState(null);

  const selectedBrand = CAR_BRANDS.find((b) => b.name === formData.brand);
  const modelOptions = selectedBrand ? selectedBrand.models : [];

  const set = (field) => (value) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'brand') next.model = '';
      return next;
    });
    setErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          year: Number(formData.year),
          mileage: Number(formData.mileage),
          engineSize: parseFloat(formData.engineSize)
        })
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setErrors(json.errors || [json.error || 'Something went wrong.']);
      } else {
        const data = json.data;
        setResult({
          price: data.estimatedPrice,
          lowerRange: data.priceRange.low,
          upperRange: data.priceRange.high,
          reliabilityScore: data.reliabilityScore,
          confidenceTier: data.confidenceTier,
          compCount: data.comparablesCount,
          marketTrend: data.marketTrend
        });
      }
    } catch (err) {
      setErrors(['Network error — make sure the backend is running on port 5000.']);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setFormData(INITIAL_FORM);
    setErrors([]);
  };

  return (
    <section id="prediction-section" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkle weight="fill" className="w-4 h-4 text-blue-500" /> AI Valuation Engine
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 tracking-tight"
          >
            Get Your Car's Market Value
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            Enter your vehicle details below. Our advanced AI model analyses the market to calculate an accurate, real-time valuation.
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <PredictionResult
                formData={formData}
                valuationResult={result}
                onReset={handleReset}
              />
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] shadow-blue-900/5"
            >
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <SelectField
                    label="Brand"
                    icon={CarProfile}
                    id="brand"
                    value={formData.brand}
                    onChange={set('brand')}
                    placeholder="Select brand"
                    options={CAR_BRANDS.map((b) => ({ value: b.name, label: b.name }))}
                  />

                  <SelectField
                    label="Model"
                    icon={CarProfile}
                    id="model"
                    value={formData.model}
                    onChange={set('model')}
                    placeholder={formData.brand ? 'Select model' : 'Select brand first'}
                    options={modelOptions.map((m) => ({ value: m, label: m }))}
                  />

                  <SelectField
                    label="Year"
                    icon={SlidersHorizontal}
                    id="year"
                    value={formData.year}
                    onChange={set('year')}
                    placeholder="Select year"
                    options={YEARS.map((y) => ({ value: y, label: y }))}
                  />

                  <NumberField
                    label="Mileage (km)"
                    icon={Speedometer}
                    id="mileage"
                    value={formData.mileage}
                    onChange={set('mileage')}
                    placeholder="e.g. 35000"
                    min={0}
                    max={1000000}
                  />

                  <NumberField
                    label="Engine Size (L)"
                    icon={SlidersHorizontal}
                    id="engineSize"
                    value={formData.engineSize}
                    onChange={set('engineSize')}
                    placeholder="e.g. 2.0"
                    min={0.6}
                    max={8.0}
                    step={0.1}
                  />

                  <SelectField
                    label="Transmission"
                    icon={SlidersHorizontal}
                    id="transmission"
                    value={formData.transmission}
                    onChange={set('transmission')}
                    placeholder="Select type"
                    options={['Automatic', 'Manual', 'CVT']}
                  />

                  <SelectField
                    label="Fuel Type"
                    icon={GasPump}
                    id="fuelType"
                    value={formData.fuelType}
                    onChange={set('fuelType')}
                    placeholder="Select fuel"
                    options={['Petrol', 'Diesel', 'Electric', 'Hybrid', 'CNG']}
                  />

                  <SelectField
                    label="Condition"
                    icon={Sparkle}
                    id="condition"
                    value={formData.condition}
                    onChange={set('condition')}
                    placeholder="Select condition"
                    options={['New', 'Like New', 'Good', 'Used', 'Poor']}
                  />
                </div>

                <AnimatePresence>
                  {errors.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-sm text-red-600 space-y-1">
                        {errors.map((err, i) => (
                          <p key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            {err}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01, translateY: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-10 w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-700 hover:via-indigo-700 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg tracking-wide shadow-lg shadow-blue-500/20 transition-all border border-transparent"
                >
                  {loading ? (
                    <>
                      <Spinner className="w-6 h-6 animate-spin text-white" />
                      Processing Valuation...
                    </>
                  ) : (
                    <>
                      <Sparkle weight="fill" className="w-6 h-6 text-white" />
                      Calculate Market Value
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}