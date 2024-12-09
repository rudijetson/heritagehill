"use client"

import React from 'react';
import Image from 'next/image';

export const ExecutiveSummary: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 p-8 md:p-12">
      {/* Header with company overview */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium 
              bg-green-500/10 text-green-600 rounded-full tracking-wider uppercase">
              Case Study 2019-2023
            </span>
          </div>
          
          {/* Title with Logo */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2b34] tracking-tight leading-tight">
                Heritage Hill
                <span className="block text-2xl md:text-4xl mt-2">Cooperative</span>
              </h2>
            </div>
            <Image 
              src="/MMAP Favicon.png" 
              alt="MMAP Logo" 
              width={150}
              height={150}
              className="object-contain w-24 md:w-[150px]"
            />
          </div>
          
          <p className="text-slate-600 text-xl leading-relaxed max-w-3xl font-light">
            An e-commerce cooperative specializing in collegiate apparel and textiles, 
            with a focus on <span className="font-medium">Historically Black Universities</span> and 
            <span className="font-medium"> Divine Nine organizations</span>.
          </p>
          
          <p className="text-slate-500 leading-relaxed max-w-3xl">
            Operating from 2019 to 2023, Heritage Hill served as a proof-of-concept for 
            cooperative supply chain management in the collegiate marketplace, exploring 
            logistics, distribution, and omni-channel sales operations from an 8,000 sq ft facility.
          </p>
        </div>
      </div>

      {/* KPI Grid with enhanced styling */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          { 
            icon: '💰', 
            label: 'Capital Deployed', 
            value: '$500K', 
            trend: 'Initial investment',
            bgColor: 'bg-blue-500/10',
            iconBg: 'bg-blue-50'
          },
          { 
            icon: '📈', 
            label: 'Revenue Generated', 
            value: '$3.01M', 
            trend: 'Over 4-year period',
            bgColor: 'bg-green-500/10',
            iconBg: 'bg-green-50'
          },
          { 
            icon: '🏪', 
            label: 'Distribution Scale', 
            value: '8K sq ft', 
            trend: 'Facility capacity',
            bgColor: 'bg-purple-500/10',
            iconBg: 'bg-purple-50'
          },
          { 
            icon: '📦', 
            label: 'Product Range', 
            value: '3,000+', 
            trend: 'Active SKUs managed',
            bgColor: 'bg-indigo-500/10',
            iconBg: 'bg-indigo-50'
          }
        ].map((kpi) => (
          <div key={kpi.label} 
            className={`flex items-center gap-6 p-6 rounded-2xl ${kpi.bgColor}
              backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}>
            <div className={`text-3xl p-4 ${kpi.iconBg} rounded-xl shadow-sm`}>
              {kpi.icon}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-600">{kpi.label}</span>
              <span className="text-3xl font-bold text-[#1a2b34]">{kpi.value}</span>
              <span className="text-sm text-slate-500">{kpi.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Research and Learnings Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Research Focus Areas */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-[#1a2b34] mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
            Research Focus Areas
          </h3>
          <ul className="space-y-4">
            {[
              'Multi-stakeholder Cooperative Legal Frameworks',
              'Omni-channel Technology Stack Integration',
              'Manufacturing & Logistics Networks',
              'Collegiate Licensing Partnership Requirements',
              'Blended Capital Stack for Sustainable Wages',
              'Marketing Automation at Scale'
            ].map((item) => (
              <li key={item} 
                className="py-3 pl-4 border-l-2 border-blue-500/20 text-slate-600 hover:border-blue-500 transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Key Learnings */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-[#1a2b34] mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-green-500 rounded-full"></span>
            Key Learnings
          </h3>
          <div className="space-y-4">
            {[
              'E-commerce Platform Architecture & Integration',
              'International Manufacturing Coordination',
              'Supply Chain & Distribution Optimization',
              'Maker Platform Scalability Requirements',
              'Collegiate Market Licensing Process',
              'Community-Focused Capital Structure'
            ].map((item) => (
              <div key={item} 
                className="p-4 rounded-lg bg-gradient-to-r from-green-500/5 to-green-500/10
                  hover:from-green-500/10 hover:to-green-500/15 transition-colors duration-300">
                <span className="text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

