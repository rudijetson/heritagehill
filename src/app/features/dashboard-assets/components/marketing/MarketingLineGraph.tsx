"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { getMarketingGraphData } from "@/app/features/dashboard-assets/utils/dashboardUtils"
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

export const MarketingLineGraph: React.FC = () => {
  const data = getMarketingGraphData();

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      const sortedPayload = [...payload].sort((a, b) => {
        if (a.name === "Online Sales") return -1;
        if (b.name === "Online Sales") return 1;
        return 0;
      });

      return (
        <div className={tooltipStyle}>
          <p className="font-medium text-gray-900 mb-2">{label}</p>
          <div className="space-y-1">
            {sortedPayload.map((entry, index) => (
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
        <h3 className={chartLayout.header.title}>Marketing Performance</h3>
        <p className={chartLayout.header.subtitle}>Monthly ad spend and online sales</p>
        <div className="mt-4 text-gray-600 text-sm">
          <p>
            This visualization demonstrates our marketing efficiency and the relationship 
            between advertising investments and sales outcomes.
          </p>
          <div className="mt-2">
            <span className="font-medium text-gray-700">Key insights:</span>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Ad spend optimization patterns</li>
              <li>Sales response to marketing investments</li>
              <li>Impact of iOS 14.5 and other market changes</li>
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
              dataKey="onlineSales" 
              stroke="#1e40af"
              name="Online Sales" 
            />
            <Line 
              {...chartLayout.chart.line}
              dataKey="adSpend" 
              stroke="#991b1b"
              name="Ad Spend" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

