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
    padding: "p-6",
    wrapper: "w-full" // Fill available width
  },

  // Header styling
  header: {
    wrapper: "px-6 pt-6",
    title: "text-lg font-medium text-gray-800",
    subtitle: "text-sm text-gray-600 mt-1"
  },

  // Chart configurations for Recharts
  chart: {
    // Smaller margins since container has padding
    margins: {
      top: 20,
      right: 30,
      left: 6,
      bottom: 40
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
      tickLine: false,
      axisLine: false,
      dy: 10,
      fontSize: 12,
      color: '#6B7280'
    },

    yAxis: {
      tick: {
        fontSize: 10,
        fill: '#9ca3af'
      },
      tickLine: false,
      axisLine: false,
      fontSize: 12,
      color: '#6B7280'
    },

    grid: {
      strokeDasharray: "3 3",
      stroke: "#E5E7EB",
      strokeOpacity: 0.1,
      vertical: false
    },

    line: {
      strokeWidth: 2,
      dot: false,
      type: 'monotone' as CurveType,
      activeDot: { r: 6 }
    },

    legend: {
      wrapperStyle: {
        fontSize: '10px',
        paddingTop: '20px'
      },
      verticalAlign: 'bottom' as const,
      height: 50,
      fontSize: 12,
      iconSize: 8,
      iconType: 'circle' as const
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

export const tooltipStyle = "bg-white p-3 shadow-lg border border-gray-100 rounded-lg";