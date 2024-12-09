"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { getSalesChannelData } from "@/app/features/dashboard-assets/utils/dashboardUtils"
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

export const SalesChannelLineGraph: React.FC = () => {
  const data = getSalesChannelData();

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
        <h3 className={chartLayout.header.title}>Sales by Channel</h3>
        <p className={chartLayout.header.subtitle}>Monthly sales across online, retail, and wholesale channels</p>
        <div className="mt-4 text-gray-600 text-sm">
          <p>This chart illustrates our multi-channel sales strategy and its evolution...</p>
          <div className="mt-2">
            <span className="font-medium text-gray-700">Key points to note:</span>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Channel mix evolution over time</li>
              <li>Seasonal patterns by channel</li>
              <li>Impact of retail partnerships and wholesale relationships</li>
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
              dataKey="online" 
              stroke="#1e40af"
              name="Online" 
            />
            <Line 
              {...chartLayout.chart.line}
              dataKey="retail" 
              stroke="#991b1b"
              name="Retail" 
            />
            <Line 
              {...chartLayout.chart.line}
              dataKey="wholesale" 
              stroke="#166534"
              name="Wholesale" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

