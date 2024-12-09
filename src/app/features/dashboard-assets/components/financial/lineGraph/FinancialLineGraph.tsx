"use client"

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { monthlyIncomeData } from '../../../utils/incomeData';
import { financialData } from '../../../utils/financialData';
import { operatingExpensesData } from '@/app/features/dashboard-assets/utils/operatingExpenses';
import { chartLayout, formatCurrency, tooltipStyle } from "@/app/features/dashboard-assets/utils/chartConfig";

interface TooltipProps {
  active?: boolean;
  payload?: {
    name: string;
    value: number;
    color: string;
  }[];
  label?: string;
}

export const FinancialLineGraph: React.FC = () => {
  const data = monthlyIncomeData.map(item => ({
    month: item.month,
    totalIncome: item.value,
    cogs: financialData.costOfGoodsSold.totalCostOfGoodsSold[item.month] || 0,
    operatingExpenses: Object.values(operatingExpensesData).reduce(
      (sum, category) => sum + (category[item.month] || 0), 0
    )
  }));

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className={tooltipStyle}>
          <p className="font-medium text-gray-900 mb-2">{label}</p>
          <div className="space-y-1">
            {payload.map((entry, index) => (
              <p 
                key={index} 
                className="text-sm"
                style={{ color: entry.color }}
              >
                <span className="font-medium">{entry.name}: </span>
                {formatCurrency(entry.value)}
              </p>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className={chartLayout.header.wrapper}>
        <h3 className={chartLayout.header.title}>Financial Overview</h3>
        <p className={chartLayout.header.subtitle}>Monthly Income, COGS, and Operating Expenses</p>
        <div className="mt-4 text-gray-600 text-sm">
          <p>
            This visualization shows our key financial metrics over time, highlighting 
            the relationship between income, costs, and operating expenses.
          </p>
          <div className="mt-2">
            <span className="font-medium text-gray-700">Key insights:</span>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Revenue growth patterns</li>
              <li>Cost management effectiveness</li>
              <li>Operating expense trends</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${chartLayout.container.height} ${chartLayout.container.padding}`}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={data} 
            margin={chartLayout.chart.margins}
          >
            <CartesianGrid {...chartLayout.chart.grid} />
            <XAxis {...chartLayout.chart.xAxis} />
            <YAxis 
              {...chartLayout.chart.yAxis}
              tickFormatter={formatCurrency}
            />
            <Tooltip 
              content={<CustomTooltip />}
              {...chartLayout.chart.tooltip}
            />
            <Legend {...chartLayout.chart.legend} />
            <Line 
              {...chartLayout.chart.line}
              dataKey="totalIncome" 
              stroke="#0EA5E9"
              name="Total Income" 
            />
            <Line 
              {...chartLayout.chart.line}
              dataKey="cogs" 
              stroke="#F43F5E"
              name="COGS" 
            />
            <Line 
              {...chartLayout.chart.line}
              dataKey="operatingExpenses" 
              stroke="#8B5CF6"
              name="Operating Expenses" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

