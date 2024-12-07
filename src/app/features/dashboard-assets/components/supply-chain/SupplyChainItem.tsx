"use client"

interface SupplyChainItemProps {
  stage: string
  description: string
  icon: string
  coopTypes: string[]
  index: number
  operated?: boolean
}

export function SupplyChainItem({ stage, description, icon, coopTypes, operated }: SupplyChainItemProps) {
  return (
    <div className={`bg-white rounded-lg border shadow-sm overflow-hidden
                   hover:shadow-md transition-all duration-300 h-full flex flex-col
                   ${operated ? 'border-blue-200 bg-blue-50/10' : 'border-gray-100'}`}>
      {/* Header with Icon - Fixed Height */}
      <div className={`p-2 border-b h-[36px] flex items-center
                    ${operated ? 'border-blue-100 bg-blue-50/50' : 'border-gray-50 bg-gray-50/50'}`}>
        <div className="flex items-center gap-1.5 w-full">
          <span className="text-sm w-[16px] flex justify-center">{icon}</span>
          <h4 className={`font-semibold text-[11px] uppercase tracking-wider
                       ${operated ? 'text-blue-900' : 'text-gray-900'}`}>
            {stage}
          </h4>
          {operated && (
            <span className="md:hidden ml-auto text-[10px] text-blue-500 font-medium">
              In-House
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-2.5 flex flex-col flex-1">
        {/* Description */}
        <div className="min-h-[32px] flex items-center">
          <p className="text-[12px] text-gray-600 leading-tight">
            {description}
          </p>
        </div>

        {/* Cooperative Types */}
        <div className="mt-2.5 pt-2.5 border-t border-gray-100 flex-1">
          <h5 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-2">
            Cooperative Models
          </h5>
          <ul className="space-y-1.5">
            {coopTypes.map((type, i) => (
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
  )
} 