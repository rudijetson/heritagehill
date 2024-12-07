"use client"

import { SupplyChainItem } from './SupplyChainItem'

const supplyChainSteps = [
  {
    stage: "Raw Materials",
    description: "Source & process base materials",
    icon: "🌿",
    operated: false,
    coopTypes: [
      "Farmer Cooperatives",
      "Material Processing Co-ops",
      "Sourcing Collectives"
    ]
  },
  {
    stage: "Textile Production",
    description: "Convert materials to textiles",
    icon: "🧶",
    operated: false,
    coopTypes: [
      "Mill Worker Co-ops",
      "Equipment Sharing Co-ops",
      "Quality Control Co-ops"
    ]
  },
  {
    stage: "Design",
    description: "Create garment patterns",
    icon: "✏️",
    operated: true,
    coopTypes: [
      "Designer Collectives",
      "Pattern Making Co-ops",
      "Creative Studios"
    ]
  },
  {
    stage: "Cut & Sew",
    description: "Produce finished garments",
    icon: "✂️",
    operated: false,
    coopTypes: [
      "Garment Worker Co-ops",
      "Production Facilities",
      "Training Centers"
    ]
  },
  {
    stage: "Embellish",
    description: "Add branding & decoration",
    icon: "🎨",
    operated: true,
    coopTypes: [
      "Print Shop Co-ops",
      "Artisan Collectives",
      "Finishing Studios"
    ]
  },
  {
    stage: "Storage",
    description: "Manage inventory & storage",
    icon: "📦",
    operated: true,
    coopTypes: [
      "Storage Cooperatives",
      "Logistics Co-ops",
      "Fulfillment Centers"
    ]
  },
  {
    stage: "Distribution",
    description: "Deliver to customers",
    icon: "🚚",
    operated: false,
    coopTypes: [
      "Delivery Co-ops",
      "Last-Mile Collectives",
      "Transport Networks"
    ]
  }
]

export function SupplyChainFlow() {
  return (
    <div className="space-y-6">
      {/* Legend */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[11px] text-gray-500">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-blue-50/50 border border-blue-200" />
            <span className="font-medium">Heritage Hill In-House Operations</span>
          </div>
        </div>
        <p className="text-[11px] text-gray-500 pb-2">
          Highlighted sections indicate operations directly owned and managed by Heritage Hill
        </p>
      </div>

      <div className="relative py-6">
        {/* In-House Labels - Above everything */}
        <div className="absolute -top-4 left-0 right-0 z-30">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-3">
            {supplyChainSteps.map((step) => (
              <div key={step.stage} className="relative">
                {step.operated && (
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

        {/* Connecting Line - Behind everything */}
        <div className="absolute top-[2.75rem] left-0 right-0 z-0">
          <div className="h-px bg-gray-200" />
          
          {/* Connection Points */}
          <div className="absolute top-0 left-0 right-0 -translate-y-1/2 
                        flex justify-between px-4 md:px-8 pointer-events-none">
            {Array(7).fill(null).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full border border-gray-200 bg-white"
              />
            ))}
          </div>
        </div>

        {/* Supply Chain Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-3 relative z-20">
          {supplyChainSteps.map((step, index) => (
            <div key={step.stage} className="relative">
              <SupplyChainItem {...step} index={index} />
              
              {/* Arrow */}
              {index < supplyChainSteps.length - 1 && (
                <div className="hidden md:block absolute top-[2.75rem] -right-1.5 
                              transform -translate-y-1/2 text-gray-300 z-0">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 