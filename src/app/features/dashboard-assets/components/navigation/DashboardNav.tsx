"use client"

import { ChevronRight } from 'lucide-react'

const sections = [
  { id: 'executive', label: 'Executive Summary' },
  { id: 'market', label: 'Market Opportunity' },
  { id: 'supply-chain', label: 'Supply Chain' },
  { id: 'timeline', label: 'Our Journey' },
  { id: 'financial', label: 'Financial Overview' },
  { id: 'profitability', label: 'Profitability' },
  { id: 'sales', label: 'Sales Channels' },
  { id: 'marketing', label: 'Marketing' },
]

export function DashboardNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 relative">
        <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 
                       whitespace-nowrap rounded-lg hover:bg-gray-100 transition-colors"
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Subtle Navigation Hint */}
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none">
          <div className="h-full flex items-center">
            <div className="bg-gradient-to-l from-white via-white to-transparent px-6">
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 