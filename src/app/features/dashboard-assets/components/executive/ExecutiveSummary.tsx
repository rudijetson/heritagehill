"use client"

import { ExecutiveSummaryHeader } from './ExecutiveSummaryHeader'
import { ExecutiveMetrics } from './ExecutiveMetrics'
import { ExecutiveContent } from './ExecutiveContent'

export function ExecutiveSummary() {
  return (
    <div className="space-y-8">
      <ExecutiveSummaryHeader />
      <div className="prose prose-lg max-w-none">
        <ExecutiveContent />
      </div>
      <ExecutiveMetrics />
    </div>
  )
}

