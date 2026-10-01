import React from 'react';
import { motion } from 'motion/react';
import { CarProfile, Cpu, Medal, ArrowUpRight } from '@phosphor-icons/react';import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

const STEPS = [
{
  step: '01',
  title: 'Tell Us About Your Car',
  desc: 'Enter your vehicle details.',
  subdesc: 'Input brand, model, year, recorded mileage, and technical specs through our streamlined interface.',
  icon: CarProfile,
  badge: 'Step 1'
},
{
  step: '02',
  title: 'AI Analyzes It',
  desc: 'Our prediction engine processes the information.',
  subdesc: 'Over 46 high-dimensional features and historical transaction curves are computed in parallel.',
  icon: Cpu,
  badge: 'Step 2'
},
{
  step: '03',
  title: 'Get Your Estimate',
  desc: 'Receive your estimated vehicle value instantly.',
  subdesc: 'View an authoritative fair-market valuation range with feature sensitivity and confidence grading.',
  icon: Medal,
  badge: 'Step 3'
}];


export default function HowItWorks({ onPredictClick }) {
  return (
    _jsxDEV("section", { id: "how-it-works", className: "py-24 relative overflow-hidden scroll-mt-20 bg-white", children: [

      _jsxDEV("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-100/50 blur-[150px] pointer-events-none" }, void 0, false),

      _jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [


        _jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-16 sm:mb-20", children: [
          _jsxDEV(motion.div, {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600 mb-4 shadow-sm", children:

            _jsxDEV("span", { children: "Precision Methodology" }, void 0, false) }, void 0, false
          ),

          _jsxDEV(motion.h2, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            className: "text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight", children:
            "How It Works" }, void 0, false

          ),

          _jsxDEV(motion.p, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.2 },
            className: "mt-4 text-base sm:text-lg font-medium text-slate-600", children:
            "Three seamless steps from initial input to high-fidelity valuation." }, void 0, false

          )] }, void 0, true
        ),


        _jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children:
          STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              _jsxDEV(motion.div, {

                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: index * 0.15 },
                className: "relative p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all duration-300 group hover:-translate-y-1.5 shadow-md hover:shadow-xl flex flex-col justify-between", children: [


                _jsxDEV("div", { children: [
                  _jsxDEV("div", { className: "flex items-center justify-between mb-8", children: [
                    _jsxDEV("span", { className: "text-4xl sm:text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 opacity-90 group-hover:opacity-100 transition-opacity", children:
                      item.step }, void 0, false
                    ),
                    _jsxDEV("div", { className: "w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-500 group-hover:bg-blue-50 group-hover:border-blue-300 transition-all", children:
                      _jsxDEV(Icon, { weight: "duotone", className: "w-6 h-6" }, void 0, false) }, void 0, false
                    )] }, void 0, true
                  ),


                  _jsxDEV("h3", { className: "text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors", children:
                    item.title }, void 0, false
                  ),

                  _jsxDEV("p", { className: "text-base font-bold text-slate-700 mb-2", children:
                    item.desc }, void 0, false
                  ),

                  _jsxDEV("p", { className: "text-xs font-medium text-slate-500 leading-relaxed", children:
                    item.subdesc }, void 0, false
                  )] }, void 0, true
                ),


                _jsxDEV("div", { className: "mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500", children: [
                  _jsxDEV("span", { className: "font-mono", children: item.badge }, void 0, false),
                  _jsxDEV(ArrowUpRight, { weight: "bold", className: "w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" }, void 0, false)] }, void 0, true
                )] }, item.step, true
              ));

          }) }, void 0, false
        )] }, void 0, true

      )] }, void 0, true
    ));

}