import { ExecutiveSummary } from "./executive/ExecutiveSummary"
import { FinancialLineGraph } from "./financial/FinancialLineGraph"
import { SalesChannelLineGraph } from "./sales/SalesChannelLineGraph"
import { MarketingLineGraph } from "./marketing/MarketingLineGraph"
import { CompanyTimeline } from "./timeline/CompanyTimeline"
import { FinancialTable } from "./financial/FinancialTable"
import { chartLayout } from "../app/utils/chartConfig"

export function FinancialDashboard() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <ExecutiveSummary />
      <FinancialTable />
      <CompanyTimeline />
      <div className="flex flex-col gap-6">
        <div className="bg-white rounded-lg shadow-sm">
          <div className={chartLayout.header.wrapper}>
            <h3 className={chartLayout.header.title}>Financial Overview</h3>
            <p className={chartLayout.header.subtitle}>Monthly income, COGS, and operating expenses</p>
            <div className="mt-4 text-gray-600 text-sm">
              <p>This chart tracks our core financial metrics over time, showing the relationship between 
              revenue growth and operational costs. Key areas to focus on include seasonal patterns in 
              revenue, cost management effectiveness, and overall profit margins.</p>
              
              <div className="mt-2">
                <span className="font-medium text-gray-700">Key points to note:</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Revenue trends across different business cycles</li>
                  <li>Relationship between COGS and total revenue</li>
                  <li>Operating expense patterns and cost control measures</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${chartLayout.container.height} ${chartLayout.container.padding} ${chartLayout.container.wrapper}`}>
            <FinancialLineGraph />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className={chartLayout.header.wrapper}>
            <h3 className={chartLayout.header.title}>Sales by Channel</h3>
            <p className={chartLayout.header.subtitle}>Monthly sales across online, retail, and wholesale channels</p>
            <div className="mt-4 text-gray-600 text-sm">
              <p>This chart illustrates our multi-channel sales strategy and its evolution. It shows how 
              different sales channels contributed to overall revenue and how we adapted our approach 
              based on market conditions and opportunities.</p>
              
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
          <div className="overflow-x-auto">
            <div className={`${chartLayout.container.height} ${chartLayout.container.padding} ${chartLayout.container.wrapper}`}>
              <SalesChannelLineGraph />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className={chartLayout.header.wrapper}>
            <h3 className={chartLayout.header.title}>Marketing Performance</h3>
            <p className={chartLayout.header.subtitle}>Monthly ad spend and online sales</p>
            <div className="mt-4 text-gray-600 text-sm">
              <p>This visualization demonstrates our marketing efficiency and the relationship between 
              advertising investments and sales outcomes. It helps understand how our marketing strategy 
              evolved and adapted to changing market conditions.</p>
              
              <div className="mt-2">
                <span className="font-medium text-gray-700">Key points to note:</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Ad spend optimization patterns</li>
                  <li>Sales response to marketing investments</li>
                  <li>Impact of iOS 14.5 and other market changes</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className={`${chartLayout.container.height} ${chartLayout.container.padding} ${chartLayout.container.wrapper}`}>
              <MarketingLineGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

