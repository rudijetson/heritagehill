"use client"

export function ProfitabilityHighlights() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">Profitability Analysis</h4>
      
      <div className="space-y-4">
        <div>
          <h5 className="font-medium text-gray-900">Gross Margin Development</h5>
          <p className="text-gray-600 mt-1">
            Gross margins improved from 35% in Q4 2019 to a peak of 48% in Q3 2021. 
            This improvement came through better supplier relationships, increased order 
            volumes, and optimized production processes. However, supply chain disruptions 
            in 2022 created downward pressure.
          </p>
        </div>

        <div>
          <h5 className="font-medium text-gray-900">Operating Income Trajectory</h5>
          <p className="text-gray-600 mt-1">
            We achieved operating profitability in Q4 2020, maintaining positive operating 
            income through 2021. The challenging market conditions of 2022-2023 led to a 
            strategic focus on maintaining market presence over short-term profitability.
          </p>
        </div>

        <div>
          <h5 className="font-medium text-gray-900">Marketing Efficiency (ROAS)</h5>
          <p className="text-gray-600 mt-1">
            Return on ad spend peaked at 4.2x in 2021 before the iOS 14.5 privacy changes. 
            Post-update, we maintained a healthy 2.8x ROAS through diversified marketing 
            channels and improved targeting strategies.
          </p>
        </div>
      </div>
    </div>
  )
} 