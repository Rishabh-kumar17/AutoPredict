import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PredictionSection from './components/PredictionSection';
import HowItWorks from './components/HowItWorks';
import StatsSection from './components/StatsSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

export default function App() {
  const scrollToPrediction = () => {
    const el = document.getElementById('prediction-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    _jsxDEV("div", { className: "min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white", children: [

      _jsxDEV(Navbar, { onPredictClick: scrollToPrediction }, void 0, false),


      _jsxDEV("main", { className: "flex-grow", children: [

        _jsxDEV(Hero, {
          onPredictClick: scrollToPrediction,
          onHowItWorksClick: scrollToHowItWorks }, void 0, false
        ),


        _jsxDEV(PredictionSection, {}, void 0, false),


        _jsxDEV(HowItWorks, { onPredictClick: scrollToPrediction }, void 0, false),


        _jsxDEV(StatsSection, {}, void 0, false),


        _jsxDEV(FinalCTA, { onPredictClick: scrollToPrediction }, void 0, false)] }, void 0, true
      ),


      _jsxDEV(Footer, {}, void 0, false)] }, void 0, true
    ));

}