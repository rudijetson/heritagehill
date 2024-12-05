export function ExecutiveMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <MetricCard
        label="Total Revenue"
        value="$3.01M"
        description="Cumulative earnings"
      />
      <MetricCard
        label="Capital Deployed"
        value="$500K"
        description="Total investment"
      />
      <MetricCard
        label="Retail Partners"
        value="125+"
        description="Distribution locations"
      />
      <MetricCard
        label="Product Scale"
        value="3,000+"
        description="SKUs at peak"
      />
    </div>
  )
}

// Helper component for consistent metric cards
function MetricCard({ label, value, description }: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="text-gray-500 text-sm">{label}</h4>
      <p className="text-2xl font-semibold">{value}</p>
      <span className="text-gray-600 text-sm">{description}</span>
    </div>
  )
} 