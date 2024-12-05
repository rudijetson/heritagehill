import { ExecutiveSummaryHeader } from './ExecutiveSummaryHeader'
import { ExecutiveMetrics } from './ExecutiveMetrics'
import { ExecutiveContent } from './ExecutiveContent'

export function ExecutiveSummary() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <ExecutiveSummaryHeader />
      <ExecutiveMetrics />
      <ExecutiveContent />
    </div>
  )
}

