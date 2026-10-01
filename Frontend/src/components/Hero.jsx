import React from 'react';
import { ArrowRight, Sparkle, TrendUp, ShieldCheck, Lightning, ChartLineUp } from '@phosphor-icons/react';
import { motion } from 'motion/react';import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

export default function Hero({ onPredictClick, onHowItWorksClick }) {
  return (
    _jsxDEV("section", { id: "hero", className: "relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden", children: [

      _jsxDEV("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-60", children: [
        _jsxDEV("div", { className: "absolute top-[-100px] left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[140px] animate-pulse-slow" }, void 0, false),
        _jsxDEV("div", { className: "absolute top-[80px] right-1/4 w-[450px] h-[450px] bg-cyan-300/20 rounded-full blur-[130px]" }, void 0, false)] }, void 0, true
      ),


      _jsxDEV("div", { className: "absolute inset-0 studio-grid opacity-30 pointer-events-none" }, void 0, false),

      _jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children:
        _jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center", children: [


          _jsxDEV("div", { className: "lg:col-span-6 flex flex-col items-start text-left", children: [

            _jsxDEV(motion.div, {
              initial: { opacity: 0, y: 15 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-600 shadow-sm shadow-blue-500/5 mb-6 backdrop-blur-md", children: [

              _jsxDEV("span", { className: "text-blue-500", children: "✦" }, void 0, false),
              _jsxDEV("span", { children: "AI-Powered Car Valuation" }, void 0, false)] }, void 0, true
            ),


            _jsxDEV(motion.h1, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.1 },
              className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]", children: [
              "Know What Your Car ",
              _jsxDEV("br", { className: "hidden sm:inline" }, void 0, false),
              _jsxDEV("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500", children: "Is Really Worth." }, void 0, false

              )] }, void 0, true
            ),


            _jsxDEV(motion.p, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.2 },
              className: "mt-6 text-lg sm:text-xl text-slate-600 max-w-xl font-normal leading-relaxed", children:
              "Get an instant estimated value for your car using machine learning." }, void 0, false

            ),


            _jsxDEV(motion.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.3 },
              className: "mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto", children: [

              _jsxDEV("button", {
                onClick: onPredictClick,
                className: "group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300", children: [

                _jsxDEV("span", { children: "Predict My Car" }, void 0, false),
                _jsxDEV(ArrowRight, { className: "w-5 h-5 transition-transform group-hover:translate-x-1" }, void 0, false)] }, void 0, true
              ),

              _jsxDEV("button", {
                onClick: onHowItWorksClick,
                className: "w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm backdrop-blur-md transition-all duration-300 hover:text-slate-900", children:

                _jsxDEV("span", { children: "See How It Works" }, void 0, false) }, void 0, false
              )] }, void 0, true
            ),


            _jsxDEV(motion.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8, delay: 0.45 },
              className: "mt-12 pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 w-full max-w-lg", children: [

              _jsxDEV("div", { children: [
                _jsxDEV("p", { className: "text-2xl font-bold text-slate-900 tracking-tight", children: "5,000+" }, void 0, false),
                _jsxDEV("p", { className: "text-xs text-slate-500 mt-0.5", children: "Vehicles Evaluated" }, void 0, false)] }, void 0, true
              ),
              _jsxDEV("div", { children: [
                _jsxDEV("p", { className: "text-2xl font-bold text-blue-600 tracking-tight", children: "46" }, void 0, false),
                _jsxDEV("p", { className: "text-xs text-slate-500 mt-0.5", children: "Model Parameters" }, void 0, false)] }, void 0, true
              ),
              _jsxDEV("div", { children: [
                _jsxDEV("p", { className: "text-2xl font-bold text-slate-900 tracking-tight", children: "< 2s" }, void 0, false),
                _jsxDEV("p", { className: "text-xs text-slate-500 mt-0.5", children: "Instant Inference" }, void 0, false)] }, void 0, true
              )] }, void 0, true
            )] }, void 0, true
          ),


          _jsxDEV(motion.div, {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.9, delay: 0.2 },
            className: "lg:col-span-6 relative", children: [


            _jsxDEV("div", { className: "relative rounded-3xl p-2 bg-gradient-to-b from-blue-50 via-white to-transparent border border-slate-200 shadow-2xl overflow-hidden group", children: [


              _jsxDEV("div", { className: "absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-400/20 blur-3xl pointer-events-none" }, void 0, false),


              _jsxDEV("div", { className: "relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100", children: [
                _jsxDEV("img", {
                  src: "/hero-car.png",
                  alt: "Modern Car with Light Studio Lighting",
                  className: "w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out" }, void 0, false
                ),


                _jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-black/10 pointer-events-none" }, void 0, false)] }, void 0, true
              ),


              _jsxDEV(motion.div, {
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.5 },
                className: "absolute top-6 right-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel shadow-xl border border-slate-200/60 backdrop-blur-xl bg-white/80", children: [

                _jsxDEV("div", { className: "w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center", children:
                  _jsxDEV(ChartLineUp, { className: "w-4 h-4 text-blue-500 animate-pulse" }, void 0, false) }, void 0, false
                ),
                _jsxDEV("div", { children: [
                  _jsxDEV("div", { className: "flex items-center gap-1.5", children: [
                    _jsxDEV("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-ping" }, void 0, false),
                    _jsxDEV("span", { className: "text-[11px] font-semibold text-slate-700", children: "Live Valuation Matrix" }, void 0, false)] }, void 0, true
                  ),
                  _jsxDEV("p", { className: "text-xs font-mono font-medium text-blue-600", children: "98.4% Confidence" }, void 0, false)] }, void 0, true
                )] }, void 0, true
              ),


              _jsxDEV(motion.div, {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.6 },
                className: "absolute bottom-6 left-6 max-w-[260px] p-3.5 rounded-2xl glass-panel shadow-xl border border-slate-200/60 backdrop-blur-xl bg-white/80", children: [

                _jsxDEV("div", { className: "flex items-center justify-between mb-1.5", children: [
                  _jsxDEV("span", { className: "text-[11px] uppercase tracking-wider text-slate-500 font-semibold", children: "Market Benchmark" }, void 0, false),
                  _jsxDEV("span", { className: "text-[11px] font-bold text-emerald-600 flex items-center gap-0.5", children: [
                    _jsxDEV(TrendUp, { className: "w-3 h-3" }, void 0, false), " +3.2%"] }, void 0, true
                  )] }, void 0, true
                ),
                _jsxDEV("div", { className: "text-xl font-bold text-slate-900 tracking-tight font-mono", children: "₹8,45,000" }, void 0, false

                ),
                _jsxDEV("p", { className: "text-[10px] text-slate-500 mt-0.5 font-medium", children: "Continuous neural regression calibration" }, void 0, false)] }, void 0, true
              ),


              _jsxDEV(motion.div, {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.7 },
                className: "absolute bottom-6 right-6 hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/90 border border-slate-200 shadow-md backdrop-blur-md", children: [

                _jsxDEV(ShieldCheck, { className: "w-4 h-4 text-blue-500" }, void 0, false),
                _jsxDEV("span", { className: "text-xs text-slate-700 font-semibold", children: "Verified Comps" }, void 0, false)] }, void 0, true
              )] }, void 0, true
            ),


            _jsxDEV("div", { className: "w-4/5 mx-auto h-6 bg-gradient-to-r from-transparent via-slate-200 to-transparent blur-xl mt-1" }, void 0, false)] }, void 0, true
          )] }, void 0, true

        ) }, void 0, false
      )] }, void 0, true
    ));

}