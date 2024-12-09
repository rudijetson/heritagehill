"use client";

import React from 'react';

export const FinancialHighlights: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-8 border-b border-gray-200">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Financial Highlights</h3>
          <p className="text-gray-500 text-sm">Key insights from your financial data</p>
        </div>
        <div className="text-gray-600 text-sm leading-relaxed">
          <p>
            This chart tracks our core financial metrics over time, showing the relationship between 
            revenue growth and operational costs. Key areas to focus on include seasonal patterns in 
            revenue, cost management effectiveness, and overall profit margins.
          </p>
        </div>
        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 mb-3">Key Points</h4>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Revenue trends across different business cycles</li>
            <li>Relationship between COGS and total revenue</li>
            <li>Operating expense patterns and cost control measures</li>
          </ul>
        </div>
      </div>
    </div>
  );
}; 