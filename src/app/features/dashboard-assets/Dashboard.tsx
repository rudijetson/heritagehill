"use client"

import React from 'react'
import { ExecutiveSummary } from "@/app/features/dashboard-assets/components/executive/ExecutiveSummary"
import { MarketOpportunity } from "@/app/features/dashboard-assets/components/market/MarketOpportunity"
import { SupplyChainFlow } from "@/app/features/dashboard-assets/components/supply-chain/SupplyChainFlow"
import { FinancialLineGraph } from "@/app/features/dashboard-assets/components/financial/lineGraph/FinancialLineGraph"
import { FinancialTable } from "@/app/features/dashboard-assets/components/financial/table/FinancialTable"
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
      
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.1) 1px, transparent 0)
            `,
            backgroundSize: '48px 48px'
          }}
        />

        <motion.div
          className="absolute inset-0 opacity-[0.015]"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.03) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.03) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity
          }}
        />
      </div>

      <main className="relative bg-transparent">
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

        {/* Footer */}
        <footer className="py-8 text-center text-slate-600 border-t border-slate-100">
          <p className="text-sm">
            Built by <a 
              href="https://bzhoff.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors font-medium"
            >
              BZHOFF
            </a> with <span className="text-red-500">❤️</span>
          </p>
        </footer>
      </main>
    </motion.div>
  )
} 