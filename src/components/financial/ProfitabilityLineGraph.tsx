"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { getProfitabilityData } from "@/app/utils/dashboardUtils"
import { chartLayout, formatCurrency, tooltipStyle } from "@/app/utils/chartConfig"

interface TooltipProps {
  active?: boolean;
  payload?: {
    name: string;
    value: number;
    color: string;
  }[];
  label?: string;
}

export function ProfitabilityLineGraph() {
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
  )
} 