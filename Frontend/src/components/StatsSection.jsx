import React from 'react';
import { motion } from 'motion/react';import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

export default function StatsSection() {
  return (
    _jsxDEV("section", { id: "stats", className: "py-24 relative overflow-hidden bg-slate-50 border-y border-slate-200 scroll-mt-20", children: [


      _jsxDEV("div", { className: "absolute inset-0 bg-radial-gradient from-blue-100/50 via-transparent to-transparent pointer-events-none" }, void 0, false),

      _jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [

        _jsxDEV("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
          _jsxDEV(motion.p, {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-xs font-mono uppercase tracking-widest text-blue-600 font-bold", children:
            "Empirical Benchmark Performance" }, void 0, false

          ),
          _jsxDEV(motion.h2, {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            className: "text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight", children:
            "Engineered For Absolute Precision" }, void 0, false

          )] }, void 0, true
        ),


        _jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center", children: [


          _jsxDEV(motion.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm relative group hover:border-blue-400 hover:shadow-lg transition-all", children: [

            _jsxDEV("div", { className: "text-5xl sm:text-6xl lg:text-7xl font-black font-mono tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors", children: "5,000+" }, void 0, false

            ),
            _jsxDEV("div", { className: "mt-4 text-base sm:text-lg font-bold text-slate-700", children: "Cars analyzed" }, void 0, false

            ),
            _jsxDEV("p", { className: "mt-1 text-xs font-medium text-slate-500", children: "Validated against verified auction transactions and dealer trade-in datasets." }, void 0, false

            )] }, void 0, true
          ),


          _jsxDEV(motion.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.15 },
            className: "p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm relative group hover:border-blue-400 hover:shadow-lg transition-all", children: [

            _jsxDEV("div", { className: "text-5xl sm:text-6xl lg:text-7xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 group-hover:opacity-90 transition-opacity", children: "46" }, void 0, false

            ),
            _jsxDEV("div", { className: "mt-4 text-base sm:text-lg font-bold text-slate-700", children: "Prediction features" }, void 0, false

            ),
            _jsxDEV("p", { className: "mt-1 text-xs font-medium text-slate-500", children: "Granular multi-factor parameter evaluation capturing non-linear depreciation." }, void 0, false

            )] }, void 0, true
          ),


          _jsxDEV(motion.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.3 },
            className: "p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm relative group hover:border-blue-400 hover:shadow-lg transition-all", children: [

            _jsxDEV("div", { className: "text-5xl sm:text-6xl lg:text-7xl font-black font-mono tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors", children: "AI" }, void 0, false

            ),
            _jsxDEV("div", { className: "mt-4 text-base sm:text-lg font-bold text-slate-700", children: "Powered valuation" }, void 0, false

            ),
            _jsxDEV("p", { className: "mt-1 text-xs font-medium text-slate-500", children: "Next-generation algorithmic regression eliminating subjective appraisal bias." }, void 0, false

            )] }, void 0, true
          )] }, void 0, true

        )] }, void 0, true
      )] }, void 0, true
    ));

}