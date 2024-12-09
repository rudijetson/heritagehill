"use client"

import React from 'react';
import { supplyChainSteps, supportingServices } from './supplyChainData';

export const SupplyChainFlow: React.FC = () => {
  return (
    <div id="supply-chain" className="p-8 bg-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="mb-6">
          <span className="text-sm uppercase tracking-wider text-slate-500">
            Community Supply Chain
          </span>
          <h2 className="text-4xl font-bold text-[#1a2b34] mt-2">
            Cooperative Network Opportunities
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-slate-600">
          Each step in the supply chain represents potential cooperative businesses 
          that can be consolidated for community benefit.
        </p>
      </div>

      {/* Supply Chain Steps */}
      <div className="my-12">
        {/* Legend */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 text-sm text-slate-500">
            <span className="w-4 h-4 bg-green-500/10 border-2 border-green-500 rounded"></span>
            Heritage Hill Operations
          </span>
        </div>
        
        {/* Scroll Prompt */}
        <div className="text-center mb-4 animate-pulse text-slate-400">
          <span className="inline-flex items-center gap-2 text-sm">
            Swipe to explore
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>

        {/* Steps Container */}
        <div className="flex flex-nowrap overflow-x-auto scrollbar-hide p-8 gap-4 scroll-smooth">
          {supplyChainSteps.map((step, index) => (
            <div 
              key={step.title}
              className={`
                min-w-[300px] p-6 rounded-2xl shadow-md relative
                ${step.operated ? 'bg-green-50/50 border-2 border-green-500' : 'bg-white'}
                transition-all duration-300 hover:shadow-lg
              `}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-[#1a2b34] mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{step.description}</p>
                
                <div className="mb-3">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Cooperative Opportunities:
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {step.cooperativeModels.map((model, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-600
                        hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
              {index < supplyChainSteps.length - 1 && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Supporting Services */}
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-[#1a2b34] mb-4">
            Supporting Services
          </h3>
          <p className="text-lg text-slate-600">
            Professional services that can be shared across the network
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportingServices.map((service) => (
            <div 
              key={service.title} 
              className={`
                flex gap-4 p-6 rounded-2xl shadow-md
                ${service.operated ? 'bg-green-50/50 border-2 border-green-500' : 'bg-white'}
                transition-all duration-300 hover:shadow-lg
              `}
            >
              <div className="text-2xl p-3 bg-slate-50 rounded-xl h-fit">
                {service.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#1a2b34] mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-slate-500 mb-4">
                  {service.description}
                </p>
                <div className="mb-2">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Shared Service Opportunities:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.cooperativeModels.map((model, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-600
                        hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 