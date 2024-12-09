"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { getProfitabilityData } from "@/app/features/dashboard-assets/utils/dashboardUtils"
import { chartLayout, formatCurrency, tooltipStyle } from "@/app/features/dashboard-assets/utils/chartConfig"

interface TooltipProps {
  active?: boolean;
  payload?: {
    name: string;
    value: number;
    color: string;
  }[];
  label?: string;
}

export const ProfitabilityLineGraph: React.FC = () => {
  const data = getProfitabilityData();

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
        <h3 className={chartLayout.header.title}>Profitability Trends</h3>
        <p className={chartLayout.header.subtitle}>Gross Profit and Net Operating Income</p>
        <div className="mt-4 text-gray-600 text-sm">
          <p>
            Track our profitability metrics over time, showing the relationship between 
            gross profit and net operating income.
          </p>
          <div className="mt-2">
            <span className="font-medium text-gray-700">Key insights:</span>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Profit margin trends</li>
              <li>Operating efficiency</li>
              <li>Seasonal patterns</li>
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
              dataKey="grossProfit" 
              stroke="#1e40af"
              name="Gross Profit" 
            />
            <Line 
              {...chartLayout.chart.line}
              dataKey="netOperatingIncome" 
              stroke="#991b1b"
              name="Net Operating Income" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}; 