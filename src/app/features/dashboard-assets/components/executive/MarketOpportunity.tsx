"use client"

import { motion } from 'framer-motion'
import { SupplyChainFlow } from '../supply-chain/SupplyChainFlow'

const marketStats = {
  institutions: "107 HBCUs",
  organizations: "9 Divine Nine Organizations",
  students: "300,000+ Active Students",
  spend: "$20M+ Annual Spend",
}

const supportingServices = [
  {
    service: "Marketing",
    description: "Brand & PR strategy",
    icon: "📢",
    operated: true,
    coopTypes: [
      "Marketing Co-ops",
      "Media Collectives",
      "Brand Studios"
    ]
  },
  {
    service: "Legal",
    description: "Compliance & contracts",
    icon: "⚖️",
    operated: false,
    coopTypes: [
      "Legal Service Co-ops",
      "Policy Collectives",
      "Rights Management"
    ]
  },
  {
    service: "Finance",
    description: "Accounting & reporting",
    icon: "📊",
    operated: true,
    coopTypes: [
      "Accounting Co-ops",
      "Financial Services",
      "Audit Collectives"
    ]
  },
  {
    service: "Operations",
    description: "Business support",
    icon: "💼",
    operated: true,
    coopTypes: [
      "Admin Service Co-ops",
      "Tech Support Co-ops",
      "Training Centers"
    ]
  }
]

export function MarketOpportunity() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Opportunity</h2>
          <div className="prose prose-lg text-gray-700">
            <p>
              The key to building successful cooperative businesses lies in identifying and 
              transforming existing commercial communities. This process—cooperatizing—means 
              consolidating fragmented supply chains into coordinated, community-owned networks.
            </p>
            <p>
              A supply chain encompasses every step from raw materials to end consumer: 
              production, manufacturing, distribution, and all supporting services. When these 
              elements are aggregated within an existing buying community, we create the 
              foundation for a viable cooperative ecosystem.
            </p>
          </div>
        </section>

        {/* Stable Buying Community - with mobile optimization */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900">Identified Buying Community</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(marketStats).map(([key, value]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 p-4 rounded-lg text-center min-h-[100px] flex flex-col justify-center"
              >
                <div className="text-xl sm:text-2xl font-bold text-blue-900 leading-tight">
                  {value}
                </div>
                <div className="text-xs sm:text-sm text-blue-700 mt-1 px-1 line-clamp-2">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-700">
            We&apos;ve identified a stable, growing commercial community within the HBCU ecosystem. 
            This community has consistent annual purchasing patterns and expands naturally with 
            enrollment growth.
          </p>
        </section>

        {/* Supply Chain Ecosystem */}
        <section className="space-y-6">
          <div className="prose prose-lg text-gray-700 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900">Community Supply Chain</h3>
            <p>
              Within this buying community exists a complete supply chain—a network of 
              micro-enterprises and business opportunities. Each step represents potential 
              cooperative businesses that can be consolidated and optimized for community benefit.
            </p>
          </div>
          <SupplyChainFlow />
          {/* Supporting Services */}
          <div className="mt-12">
            <h4 className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-4">
              Supporting Services
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {supportingServices.map((service) => (
                <div
                  key={service.service}
                  className={`bg-white rounded-lg border shadow-sm overflow-hidden
                             hover:shadow-md transition-all duration-300 h-full flex flex-col
                             ${service.operated ? 'border-blue-200 bg-blue-50/10' : 'border-gray-100'}`}
                >
                  {/* Header */}
                  <div className={`p-2 border-b h-[36px] flex items-center
                                 ${service.operated ? 'border-blue-100 bg-blue-50/50' : 'border-gray-50 bg-gray-50/50'}`}>
                    <div className="flex items-center gap-1.5 w-full">
                      <span className="text-sm w-[16px] flex justify-center">{service.icon}</span>
                      <h4 className={`font-semibold text-[10px] uppercase tracking-wider
                                    ${service.operated ? 'text-blue-900' : 'text-gray-900'}`}>
                        {service.service}
                      </h4>
                      {service.operated && (
                        <span className="md:hidden ml-auto text-[10px] text-blue-500 font-medium">
                          In-House
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add In-House labels above for desktop */}
                  <div className="absolute -top-4 left-0 right-0 z-30">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {supportingServices.map((service) => (
                        <div key={service.service} className="relative">
                          {service.operated && (
                            <div className="hidden md:block absolute left-0 right-0 text-center">
                              <span className="text-[10px] text-blue-500 font-medium bg-white px-2 py-0.5 rounded-full border border-blue-100">
                                In-House
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-2.5 flex flex-col flex-1">
                    <div className="min-h-[32px] flex items-center">
                      <p className="text-[12px] text-gray-600 leading-tight">
                        {service.description}
                      </p>
                    </div>

                    {/* Cooperative Types */}
                    <div className="mt-2.5 pt-2.5 border-t border-gray-100 flex-1">
                      <h5 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-2">
                        Cooperative Models
                      </h5>
                      <ul className="space-y-1.5">
                        {service.coopTypes.map((type, i) => (
                          <li 
                            key={i} 
                            className="text-[12px] text-gray-600 flex items-start gap-1.5 
                                     hover:text-gray-900 transition-colors leading-tight"
                          >
                            <span className="w-1 h-1 bg-blue-400/50 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{type}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 