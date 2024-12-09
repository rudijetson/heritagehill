"use client"

import React from 'react';

export const DashboardIntro: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24 px-8 bg-gradient-to-br from-[#1a2b34] to-[#2c3e50] text-white">
      {/* Modern Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-8">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Live Case Study
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="flex flex-col text-[3.5rem] font-bold mb-12 leading-tight">
          Heritage Hill
          <span className="text-2xl text-green-500 font-medium mt-2">
            Cincinnati&apos;s Maker Distribution Hub
          </span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          {/* Orders Fulfilled */}
          <div className="p-8 bg-white/5 rounded-2xl text-center transition-transform hover:-translate-y-1 hover:bg-white/10">
            <div className="text-4xl font-bold text-green-500 mb-2">50K</div>
            <div className="text-slate-400">Orders Fulfilled</div>
          </div>
          {/* Licensed Organizations */}
          <div className="p-8 bg-white/5 rounded-2xl text-center transition-transform hover:-translate-y-1 hover:bg-white/10">
            <div className="text-4xl font-bold text-green-500 mb-2">55</div>
            <div className="text-slate-400">Licensed Organizations</div>
          </div>
          {/* Co-op Members */}
          <div className="p-8 bg-white/5 rounded-2xl text-center transition-transform hover:-translate-y-1 hover:bg-white/10">
            <div className="text-4xl font-bold text-green-500 mb-2">15</div>
            <div className="text-slate-400">Co-op Members</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4 my-8">
          {['Maker Economy', 'Distribution Network', 'Local First'].map((tag) => (
            <span 
              key={tag}
              className="px-6 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Vision Statement */}
        <p className="max-w-3xl mx-auto text-center text-xl leading-relaxed text-slate-400 my-12">
          Imagine a network of 15,000+ Cincinnati makers, each with their own data story, 
          connected through shared resources and opportunities.
        </p>

        {/* Scroll Indicator - Fixed to point downward */}
        <div className="text-center mt-16">
          <span className="block text-slate-400 text-sm uppercase tracking-wider mb-4">
            Explore the Data
          </span>
          <div className="relative w-6 h-6 mx-auto animate-bounce">
            <div className="absolute w-full h-full border-b-2 border-r-2 border-green-500 rotate-45 translate-y-[-50%]"></div>
            <div className="absolute w-full h-full border-b-2 border-r-2 border-green-500 rotate-45 translate-y-[-25%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}; 