import React from 'react';
import { Speedometer, ArrowUp } from '@phosphor-icons/react';import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

export default function Footer({ onNavigate }) {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    _jsxDEV("footer", { className: "pt-16 pb-12 border-t border-slate-200 bg-white text-slate-500", children:
      _jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [

        _jsxDEV("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-200", children: [


          _jsxDEV("div", { className: "space-y-4 max-w-sm", children: [
            _jsxDEV("button", { onClick: () => scrollTo('hero'), className: "block focus:outline-none", children:
              _jsxDEV("img", {
                src: "/logo.png",
                alt: "AutoPredict Logo",
                className: "h-12 sm:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" }, void 0, false
              ) }, void 0, false
            ),
            _jsxDEV("p", { className: "text-sm text-slate-500 font-medium", children: "AI-powered vehicle price estimation." }, void 0, false

            )] }, void 0, true
          ),


          _jsxDEV("div", { className: "flex flex-wrap items-center gap-8", children: [
            _jsxDEV("button", {
              onClick: () => scrollTo('hero'),
              className: "text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors", children:
              "Home" }, void 0, false

            ),
            _jsxDEV("button", {
              onClick: () => scrollTo('prediction-section'),
              className: "text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors", children:
              "Predict" }, void 0, false

            ),
            _jsxDEV("button", {
              onClick: () => scrollTo('how-it-works'),
              className: "text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors", children:
              "How It Works" }, void 0, false

            ),
            _jsxDEV("button", {
              onClick: () => scrollTo('stats'),
              className: "text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors", children:
              "About" }, void 0, false

            )] }, void 0, true
          ),


          _jsxDEV("div", { children:
            _jsxDEV("button", {
              onClick: scrollToTop,
              className: "w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 transition-all shadow-sm",
              "aria-label": "Back to top", children:

              _jsxDEV(ArrowUp, { weight: "bold", className: "w-4 h-4" }, void 0, false) }, void 0, false
            ) }, void 0, false
          )] }, void 0, true
        ),


        _jsxDEV("div", { className: "pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400", children: [
          _jsxDEV("p", { children: "© 2026 AutoPredict. All rights reserved." }, void 0, false),
          _jsxDEV("p", { className: "text-slate-400", children: "Engineered with deep learning valuation algorithms." }, void 0, false

          )] }, void 0, true
        )] }, void 0, true

      ) }, void 0, false
    ));

}