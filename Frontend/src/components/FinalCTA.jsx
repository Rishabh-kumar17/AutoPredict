import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkle } from '@phosphor-icons/react';import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

export default function FinalCTA({ onPredictClick }) {
  return (
    _jsxDEV("section", { className: "py-24 relative overflow-hidden bg-slate-50", children:
      _jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children:


        _jsxDEV("div", { className: "relative rounded-[2.5rem] bg-white border border-slate-200 p-10 sm:p-16 lg:p-20 text-center overflow-hidden shadow-xl", children: [


          _jsxDEV("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-200/40 rounded-full blur-[140px] pointer-events-none" }, void 0, false),
          _jsxDEV("div", { className: "absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-300/40 rounded-full blur-[140px] pointer-events-none" }, void 0, false),


          _jsxDEV("div", { className: "absolute inset-0 studio-grid opacity-30 pointer-events-none" }, void 0, false),

          _jsxDEV("div", { className: "relative z-10 max-w-3xl mx-auto flex flex-col items-center", children: [


            _jsxDEV(motion.div, {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600 mb-6 shadow-sm", children: [

              _jsxDEV(Sparkle, { weight: "fill", className: "w-3.5 h-3.5 text-blue-500" }, void 0, false),
              _jsxDEV("span", { children: "Instant AI Valuation" }, void 0, false)] }, void 0, true
            ),


            _jsxDEV(motion.h2, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
              className: "text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight", children: [
              "Ready to discover your ",
              _jsxDEV("br", { className: "hidden sm:inline" }, void 0, false), "car's value?"] }, void 0, true

            ),

            _jsxDEV(motion.p, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.2 },
              className: "mt-6 text-base sm:text-lg font-medium text-slate-600 max-w-xl", children:
              "Unlock real-time market intelligence backed by machine learning models trained on thousands of verified automotive transactions." }, void 0, false

            ),


            _jsxDEV(motion.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.3 },
              className: "mt-10", children:

              _jsxDEV("button", {
                onClick: onPredictClick,
                className: "group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300 text-lg", children: [

                _jsxDEV("span", { children: "Predict My Car" }, void 0, false),
                _jsxDEV(ArrowRight, { weight: "bold", className: "w-5 h-5 transition-transform group-hover:translate-x-1" }, void 0, false)] }, void 0, true
              ) }, void 0, false
            ),


            _jsxDEV(motion.p, {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { delay: 0.4 },
              className: "mt-6 text-xs font-semibold text-slate-500", children:
              "Free to use • No personal contact required • Instant result" }, void 0, false

            )] }, void 0, true

          )] }, void 0, true
        ) }, void 0, false

      ) }, void 0, false
    ));

}