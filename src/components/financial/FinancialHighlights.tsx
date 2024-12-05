export function FinancialHighlights() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Financial Insights</h4>
      
      <div className="space-y-4">
        <div>
          <h5 className="font-medium text-gray-900">Revenue Growth Journey</h5>
          <p className="text-gray-600 mt-1">
            Revenue grew from initial $50K in Q4 2019 to peak at $1.28M in 2021, 
            demonstrating strong market validation. This 25x growth was primarily 
            driven by expanded retail partnerships and improved online presence.
          </p>
        </div>

        <div>
          <h5 className="font-medium text-gray-900">Cost Management Evolution</h5>
          <p className="text-gray-600 mt-1">
            COGS initially fluctuated between 45-65% of revenue as we optimized our 
            supply chain. By late 2021, we stabilized at approximately 52%, though 
            market pressures in 2022 pushed this to 58%.
          </p>
        </div>

        <div>
          <h5 className="font-medium text-gray-900">Operational Efficiency</h5>
          <p className="text-gray-600 mt-1">
            Operating expenses showed significant economies of scale, dropping from 
            85% of revenue in early 2020 to 42% by mid-2021. This improvement came 
            through better resource allocation and process optimization.
          </p>
        </div>
      </div>
    </div>
  )
} 