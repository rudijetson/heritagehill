"use client"

import { profitabilityData } from '@/app/features/dashboard-assets/utils/profitabilityData';

export function ProfitabilityHighlights() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Calculate total Net Operating Income
  const netOperatingIncome = profitabilityData.netOperatingIncome.Total;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-sm font-medium text-gray-500 mb-1">Net Operating Income</h3>
        <p className={`text-2xl font-semibold ${netOperatingIncome < 0 ? 'text-red-600' : 'text-blue-600'}`}>
          {formatCurrency(netOperatingIncome)}
        </p>
      </div>
      {/* Add other profitability highlights as needed */}
    </div>
  );
} 