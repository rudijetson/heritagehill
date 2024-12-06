"use client";

import { useMemo, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { additionalExpensesData } from '@/app/features/dashboard-assets/utils/additionalExpensesData';
import { financialData } from '@/app/features/dashboard-assets/utils/financialData';
import { costOfGoodsSoldData } from '@/app/features/dashboard-assets/utils/costOfGoodsSoldData';
import { financialMetricsData } from '@/app/features/dashboard-assets/utils/financialMetricsData';
import { expensesData } from '@/app/features/dashboard-assets/utils/expensesData';

type Period = 'Q4 2019' | '2020' | '2021' | '2022' | '2023' | 'Total';
type SectionKey = 'income' | 'cogs' | 'expenses';

// Helper function to aggregate monthly data into yearly periods
const aggregateByPeriod = (monthlyData: { [key: string]: number | string }) => {
  const periods: { [key in Period]: number } = {
    'Q4 2019': 0,
    '2020': 0,
    '2021': 0,
    '2022': 0,
    '2023': 0,
    'Total': typeof monthlyData['Total'] === 'number' ? monthlyData['Total'] : 0
  };

  Object.entries(monthlyData).forEach(([month, value]) => {
    const numValue = typeof value === 'number' ? value : 0;
    if (month.startsWith('Oct 2019') || month.startsWith('Nov 2019') || month.startsWith('Dec 2019')) {
      periods['Q4 2019'] += numValue;
    } else if (month.includes('2020')) {
      periods['2020'] += numValue;
    } else if (month.includes('2021')) {
      periods['2021'] += numValue;
    } else if (month.includes('2022')) {
      periods['2022'] += numValue;
    } else if (month.includes('2023')) {
      periods['2023'] += numValue;
    }
  });

  return periods;
};

type ExpensesDataStructure = {
  'Operating Expenses': {
    [key: string]: { [key in Period]: number };
  };
  'Summary': {
    'Total Expenses': { [key in Period]: number };
    'Net Operating Income': { [key in Period]: number };
  };
};

export function FinancialTable() {
  const [expandedSections, setExpandedSections] = useState<{ [key in SectionKey]: boolean }>({
    income: false,
    cogs: false,
    expenses: false
  });

  // Reorganize the income data
  const incomeData = useMemo(() => ({
    'Revenue - Online': aggregateByPeriod(financialData.income.online),
    'Revenue - Retail': aggregateByPeriod(financialData.income.retail),
    'Revenue - Wholesale': aggregateByPeriod(financialData.income.wholesale),
    'Total Sales': aggregateByPeriod(financialData.income.totalSales),
    'Other Income': aggregateByPeriod(financialData.income.grantsAndDonations),
    'Total Income': aggregateByPeriod(financialData.income.totalIncome)
  }), []);

  // Reorganize COGS data
  const cogsData = useMemo(() => ({
    'Production': aggregateByPeriod(costOfGoodsSoldData.production),
    'Inventory': aggregateByPeriod(costOfGoodsSoldData.inventory),
    'Fulfillment': aggregateByPeriod(costOfGoodsSoldData.fulfillment),
    'Total Cost of Goods': aggregateByPeriod(costOfGoodsSoldData.totalCostOfGoodsSold)
  }), []);

  // Reorganize expenses data
  const expensesDataAggregated = useMemo<ExpensesDataStructure>(() => ({
    'Operating Expenses': {
      'Advertising & Marketing': aggregateByPeriod(expensesData.advertisingAndMarketing),
      'Administrative': aggregateByPeriod(additionalExpensesData.administrative),
      'Business Development': aggregateByPeriod(additionalExpensesData.businessDevelopment),
      'Facilities & Operations': aggregateByPeriod(additionalExpensesData.facilitiesAndOperations),
      'Logistics': aggregateByPeriod(additionalExpensesData.logistics),
      'Miscellaneous': aggregateByPeriod(additionalExpensesData.miscellaneous),
      'Personnel': aggregateByPeriod(additionalExpensesData.personnelExpenses),
      'Regulatory': aggregateByPeriod(additionalExpensesData.regulatory),
    },
    'Summary': {
      'Total Expenses': aggregateByPeriod(financialMetricsData.totalExpenses),
      'Net Operating Income': aggregateByPeriod(financialMetricsData.netOperatingIncome)
    }
  }), []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getCellStyle = (value: number, isTotal: boolean = false) => {
    const baseStyle = "px-6 py-4 text-sm text-right whitespace-nowrap ";
    const colorStyle = value < 0 ? "text-red-600" : isTotal ? "text-blue-600" : "text-gray-900";
    const weightStyle = isTotal ? "font-semibold" : "font-normal";
    return `${baseStyle} ${colorStyle} ${weightStyle}`;
  };

  const renderSummaryRow = (label: string, values: { [key in Period]: number }, isTotal: boolean = false, isMainRow: boolean = false) => (
    <tr className={`${isTotal ? 'bg-gray-50 border-t-2 border-gray-200' : 'hover:bg-gray-50'}`}>
      <td className={`
        sticky left-0 
        ${isMainRow ? 'z-20' : 'z-10'} 
        ${isTotal ? 'bg-gray-50' : 'bg-white'} 
        px-6 py-4 text-sm 
        ${isTotal ? 'font-semibold' : 'font-normal'} 
        text-gray-900 
        before:absolute before:inset-0 ${isTotal ? 'before:bg-gray-50' : 'before:bg-white'}
      `}>
        <span className="relative z-30 text-left w-full block">{label}</span>
      </td>
      {(['Q4 2019', '2020', '2021', '2022', '2023', 'Total'] as Period[]).map(period => (
        <td key={period} className={getCellStyle(values[period], isTotal)}>
          {formatCurrency(values[period])}
        </td>
      ))}
    </tr>
  );

  const toggleSection = (section: SectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderSectionHeader = (section: SectionKey, total: { [key in Period]: number }, label: string) => (
    <tr className="bg-gray-50 border-t-2 border-gray-200">
      <td className="sticky left-0 z-20 bg-gray-50 px-6 py-4 before:absolute before:inset-0 before:bg-gray-50">
        <div className="relative z-30">
          <button 
            onClick={() => toggleSection(section)} 
            className="flex items-center w-full group"
          >
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              {expandedSections[section] ? (
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
              )}
            </div>
            <span className="text-sm font-semibold text-gray-900 text-left">{label}</span>
          </button>
        </div>
      </td>
      {(['Q4 2019', '2020', '2021', '2022', '2023', 'Total'] as Period[]).map(period => (
        <td key={period} className={getCellStyle(total[period], true)}>
          {formatCurrency(total[period])}
        </td>
      ))}
    </tr>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-900">Financial Details</h3>
        <p className="text-sm text-gray-500 mt-1">Detailed breakdown of income and expenses</p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <table className="w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="sticky left-0 z-20 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider before:absolute before:inset-0 before:bg-gray-50">
                  <span className="relative z-30">Category</span>
                </th>
                {(['Q4 2019', '2020', '2021', '2022', '2023', 'Total'] as Period[]).map(period => (
                  <th key={period} className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    {period}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Income Section */}
              {renderSectionHeader('income', incomeData['Total Income'], 'Income')}
              {expandedSections.income && Object.entries(incomeData)
                .filter(([key]) => !key.includes('Total'))
                .map(([category, values]) => renderSummaryRow(category, values, false, true))}
              {expandedSections.income && renderSummaryRow('Total Income', incomeData['Total Income'], true, true)}

              {/* COGS Section */}
              {renderSectionHeader('cogs', cogsData['Total Cost of Goods'], 'Cost of Goods Sold')}
              {expandedSections.cogs && Object.entries(cogsData)
                .filter(([key]) => !key.includes('Total'))
                .map(([category, values]) => renderSummaryRow(category, values, false, true))}
              {expandedSections.cogs && renderSummaryRow('Total Cost of Goods', cogsData['Total Cost of Goods'], true, true)}

              {/* Operating Expenses Section */}
              {renderSectionHeader('expenses', expensesDataAggregated.Summary['Total Expenses'], 'Operating Expenses')}
              {expandedSections.expenses && Object.entries(expensesDataAggregated['Operating Expenses'])
                .map(([category, values]) => renderSummaryRow(category, values, false, true))}
              {expandedSections.expenses && renderSummaryRow('Total Expenses', expensesDataAggregated.Summary['Total Expenses'], true, true)}

              {/* Net Operating Income - Always visible and sticky */}
              {renderSummaryRow('Net Operating Income', expensesDataAggregated.Summary['Net Operating Income'], true, true)}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden p-2 text-sm text-gray-500 text-center border-t">
        Scroll horizontally to see more →
      </div>
    </div>
  );
}