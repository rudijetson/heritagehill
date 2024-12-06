import { CurveType } from 'recharts/types/shape/Curve';

// Common formatting functions
export const formatCurrency = (value: number) => 
  new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(value);

// Layout and styling configurations for all charts
export const chartLayout = {
  // Container dimensions - padding around the chart container
  container: {
    height: "h-[400px]",
    padding: "p-4",
    wrapper: "w-full" // Fill available width
  },

  // Header styling
  header: {
    wrapper: "p-6 border-b",
    title: "text-lg font-semibold text-gray-900",
    subtitle: "text-sm text-gray-500 mt-1"
  },

  // Chart configurations for Recharts
  chart: {
    // Smaller margins since container has padding
    margins: {
      top: 10,
      right: 10,
      left: 10,
      bottom: 30
    },

    xAxis: {
      dataKey: "month",
      height: 50,
      angle: -45,
      textAnchor: "end",
      interval: 4,
      tick: {
        fontSize: 10,
        fill: '#9ca3af'
      },
      tickLine: false
    },

    yAxis: {
      tick: {
        fontSize: 10,
        fill: '#9ca3af'
      },
      tickLine: false,
      axisLine: false
    },

    grid: {
      strokeDasharray: "3 3",
      stroke: "#9ca3af",
      strokeOpacity: 0.1
    },

    line: {
      strokeWidth: 2,
      dot: false,
      type: 'monotone' as CurveType
    },

    legend: {
      wrapperStyle: {
        fontSize: '10px'
      },
      iconSize: 8,
      iconType: "plainline" as const
    },

    tooltip: {
      wrapperStyle: {
        zIndex: 1000
      },
      cursor: {
        strokeDasharray: '3 3'
      }
    }
  }
};

export const tooltipStyle = "bg-white p-4 shadow-lg border border-gray-200 rounded-lg max-w-[300px]";