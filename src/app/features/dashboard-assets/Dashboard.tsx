"use client"

import React from 'react'
import { ExecutiveSummary } from "@/app/features/dashboard-assets/components/executive/ExecutiveSummary"
import { MarketOpportunity } from "@/app/features/dashboard-assets/components/market/MarketOpportunity"
import { SupplyChainFlow } from "@/app/features/dashboard-assets/components/supply-chain/SupplyChainFlow"
import { FinancialLineGraph } from "@/app/features/dashboard-assets/components/financial/lineGraph/FinancialLineGraph"
import { FinancialTable } from "@/app/features/dashboard-assets/components/financial/table/FinancialTable"
import { ProfitabilityHighlights } from "@/app/features/dashboard-assets/components/financial/profit/ProfitabilityHighlights"
import { ProfitabilityLineGraph } from "@/app/features/dashboard-assets/components/financial/profit/ProfitabilityLineGraph"
import { SalesChannelLineGraph } from "@/app/features/dashboard-assets/components/sales/SalesChannelLineGraph"
import { MarketingLineGraph } from "@/app/features/dashboard-assets/components/marketing/MarketingLineGraph"
import { CompanyTimeline } from "@/app/features/dashboard-assets/components/timeline/CompanyTimeline"
import { DashboardNav } from "@/app/features/dashboard-assets/components/navigation/DashboardNav"
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
        <div className="container mx-auto p-4 space-y-12">
          <section id="executive">
            <ExecutiveSummary />
          </section>

          <section id="market">
            <MarketOpportunity />
          </section>

          <section id="supply-chain">
            <SupplyChainFlow />
          </section>

          <section id="timeline">
            <CompanyTimeline />
          </section>

          <section id="financial" className="space-y-8">
            <FinancialTable />
            <div className="flex flex-col gap-8">
              <FinancialLineGraph />
              <div id="profitability">
                <ProfitabilityLineGraph />
              </div>
            </div>
            <ProfitabilityHighlights />
          </section>

          <section className="flex flex-col gap-8">
            <div id="sales">
              <SalesChannelLineGraph />
            </div>
            <div id="marketing">
              <MarketingLineGraph />
            </div>
          </section>
        </div>
      </main>
    </motion.div>
  )
} 