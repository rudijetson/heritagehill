"use client";

import React from 'react';
import { marketMetrics } from '../market/marketData';
import type { MarketMetric } from '../market/marketData';

export const MarketOpportunity: React.FC = () => {
  return (
    <div className="p-8 bg-white space-y-16">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-sm uppercase tracking-wider text-slate-500">
            Market Opportunity
          </span>
          <h2 className="text-4xl font-bold text-[#1a2b34] mt-2">
            Cooperatizing Commercial Communities
          </h2>
        </div>
        
        <div className="text-lg leading-relaxed text-slate-600 space-y-6">
          <p>
            The key to building successful cooperative businesses lies in identifying and transforming 
            existing commercial communities. This process—cooperatizing—means consolidating fragmented 
            supply chains into coordinated, community-owned networks.
          </p>
          <p>
            A supply chain encompasses every step from raw materials to end consumer: production, 
            manufacturing, distribution, and all supporting services. When these elements are aggregated 
            within an existing buying community, we create the foundation for a viable cooperative ecosystem.
          </p>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="max-w-4xl mx-auto p-8 bg-slate-50 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#1a2b34] text-center mb-8">
          Identified Buying Community
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {marketMetrics.map((metric: MarketMetric) => (
            <div 
              key={metric.label} 
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm
                hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div className="text-2xl p-3 bg-slate-50 rounded-xl h-fit">
                {metric.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-[#1a2b34] leading-none">
                  {metric.value}
                </span>
                <span className="text-base font-medium text-slate-500">
                  {metric.label}
                </span>
                <span className="text-sm text-slate-400">
                  {metric.sublabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
          We&apos;ve identified a stable, growing commercial community within the HBCU ecosystem. 
          This community has consistent annual purchasing patterns and expands naturally with 
          enrollment growth.
        </p>
      </div>
    </div>
  );
}; 