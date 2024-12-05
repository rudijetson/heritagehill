import { chartLayout } from "../../app/utils/chartConfig"

export function ExecutiveSummaryHeader() {
  return (
    <div className={chartLayout.header.wrapper}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Heritage Hill</h2>
          <p className="text-gray-600">Building Economic Infrastructure for the Black Diaspora</p>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500">Operational Period</span>
          <p className="text-xl font-semibold">2019-2023</p>
        </div>
      </div>
    </div>
  )
} 