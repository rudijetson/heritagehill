"use client"

import { motion } from 'framer-motion'

const opportunities = [
  {
    title: "Educational Integration",
    icon: "🎓",
    description: "Integrating with educational institutions for hands-on business experience",
    points: [
      "Potential for 107 licensing partners across HBCUs",
      "Student involvement in e-commerce operations",
      "Hands-on experience with generative AI",
      "Real-world manufacturing & supply chain exposure",
      "Practical business application training"
    ]
  },
  {
    title: "Community Commerce",
    icon: "🏪",
    description: "Direct-to-consumer platform empowering community-based commerce",
    points: [
      "Consolidated licensing program under one umbrella",
      "Platform for makers, marketers, and designers",
      "Community-driven product development",
      "Multi-channel distribution network",
      "Integrated e-commerce solutions"
    ]
  },
  {
    title: "Corporate & Government Partnerships",
    icon: "🤝🏿",
    description: "Building strategic partnerships for sustainable growth",
    points: [
      "Corporate branded product solutions",
      "Workforce development programs",
      "Community wealth building initiatives",
      "Public-private partnership opportunities",
      "Economic development integration"
    ]
  }
]

export function MarketOpportunity() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Opportunity</h2>
        <p className="text-xl text-gray-600 mb-8">
          Commercializing Existing Communities Through Multi-Stakeholder Cooperative Model
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md 
                         border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{opportunity.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {opportunity.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {opportunity.description}
              </p>
              <ul className="space-y-2">
                {opportunity.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl">
          <h4 className="text-lg font-semibold text-blue-900 mb-2">
            Estimated Market Potential
          </h4>
          <p className="text-gray-700">
            With an estimated $20 million annual textile spend (conservative estimate) 
            across HBCUs and Divine Nine organizations alone, this model presents significant 
            opportunities for community wealth building through cooperative economics.
          </p>
        </div>
      </div>
    </div>
  )
} 