"use client"

import { typography } from "@/app/styles/typography"

export function ExecutiveContent() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="space-y-6">
          <div className="space-y-4">
            <h3 className={typography.h3}>The Genesis</h3>
            <p className={typography.lead}>
              Heritage Hill was founded on a fundamental belief: <span className={typography.emphasis}>
              the greatest economic opportunities emerge from creating cooperative, 
              community-centered supply chain ecosystems.</span>
            </p>
          </div>

          <p className={typography.body}>
            Through deep analysis of the HBCU ecosystem, Divine Nine organizations, 
            and broader Black community, we identified significant potential for 
            sustainable economic development through coordinated supply chain innovation.
          </p>
        </section>

        <section className="space-y-6">
          <div className="space-y-4">
            <h3 className={typography.h3}>Core Innovation Areas</h3>
            <p className={typography.body}>
              Our four-year journey of experimentation and learning focused on four key areas 
              essential to building sustainable cooperative ecosystems:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className={typography.h4}>Blended Capital Models</h4>
                <p className={typography.bodySmall}>
                  Innovative funding mechanisms balancing profitability, equity, and scalability:
                </p>
                <ul className="space-y-2">
                  {[
                    "Community-aligned funding partnerships",
                    "Non-extractive capital flows",
                    "Micro-enterprise aggregation",
                    "Equitable growth structures"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                      <span className={typography.bodySmall}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className={typography.h4}>Pan-African Supply Chains</h4>
                <p className={typography.bodySmall}>
                  Building international trade networks connecting supply chains across the African 
                  continent, with detailed import/export frameworks supporting Pan-African economic 
                  development.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className={typography.h4}>Cooperative Structures</h4>
                <p className={typography.bodySmall}>
                  Implementing and testing frameworks for worker-owned, consumer-owned, and 
                  multi-stakeholder cooperatives as sustainable engines for community wealth creation.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className={typography.h4}>Market & Operations</h4>
                <p className={typography.bodySmall}>
                  Developing comprehensive operational frameworks and market strategies:
                </p>
                <ul className="space-y-2">
                  {[
                    "Multi-channel e-commerce integration",
                    "Collegiate market licensing",
                    "Supply chain optimization",
                    "Manufacturing systems design"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                      <span className={typography.bodySmall}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className={typography.h3}>The Vision Forward</h3>
          <p className={typography.body}>
            This journey has yielded a replicable framework for designing equitable, 
            cooperative supply chains that meet the unique needs of historically underserved 
            communities. <span className={typography.emphasis}>Our insights and learnings 
            provide a roadmap for transforming the economic landscape of the Black Diaspora 
            and beyond.</span>
          </p>
        </section>
      </div>
    </div>
  )
}