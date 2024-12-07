"use client"

import React from 'react'
import { ExecutiveSummary } from "@/app/features/dashboard-assets/components/executive/ExecutiveSummary"
import { MarketOpportunity } from "@/app/features/dashboard-assets/components/executive/MarketOpportunity"
import { FinancialLineGraph } from "@/app/features/dashboard-assets/components/financial/FinancialLineGraph"
import { FinancialTable } from "@/app/features/dashboard-assets/components/financial/FinancialTable"
import { ProfitabilityLineGraph } from "@/app/features/dashboard-assets/components/financial/ProfitabilityLineGraph"
import { SalesChannelLineGraph } from "@/app/features/dashboard-assets/components/sales/SalesChannelLineGraph"
import { MarketingLineGraph } from "@/app/features/dashboard-assets/components/marketing/MarketingLineGraph"
import { CompanyTimeline } from "@/app/features/dashboard-assets/components/timeline/CompanyTimeline"
import { DashboardNav } from "@/app/features/dashboard-assets/components/navigation/DashboardNav"
import { chartLayout } from "@/app/features/dashboard-assets/utils/chartConfig"
import { motion } from 'framer-motion'

export function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full min-h-screen bg-white relative"
      key="dashboard-page"
    >
      <DashboardNav />
      <main className="relative bg-white">
        <div className="container mx-auto p-4 space-y-6">
          <div id="executive">
            <ExecutiveSummary />
          </div>

          <div id="market">
            <MarketOpportunity />
          </div>

          <div id="timeline">
            <CompanyTimeline />
          </div>

          <div id="financial">
            <FinancialTable />
          </div>

          <div className="flex flex-col gap-6">
            <div id="financial" className="bg-white rounded-lg shadow-sm">
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

            <div id="profitability" className="bg-white rounded-lg shadow-sm">
              <div className={chartLayout.header.wrapper}>
                <h3 className={chartLayout.header.title}>Profitability Metrics</h3>
                <p className={chartLayout.header.subtitle}>Gross profit and net operating income trends</p>
                <div className="mt-4 text-gray-600 text-sm">
                  <p>This visualization shows our journey toward profitability, highlighting the relationship 
                  between gross margins and operating efficiency.</p>
                  
                  <div className="mt-2">
                    <span className="font-medium text-gray-700">Key points to note:</span>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Gross margin trends and optimization efforts</li>
                      <li>Operating income development over time</li>
                      <li>Impact of scale on profitability</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`${chartLayout.container.height} ${chartLayout.container.padding} ${chartLayout.container.wrapper}`}>
                <ProfitabilityLineGraph />
              </div>
            </div>

            <div id="sales" className="bg-white rounded-lg shadow-sm">
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

            <div id="marketing" className="bg-white rounded-lg shadow-sm">
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
      </main>
    </motion.div>
  )
} 