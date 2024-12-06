import { chartLayout } from "@/app/features/dashboard-assets/utils/chartConfig"
import Image from 'next/image'

export function ExecutiveSummaryHeader() {
  return (
    <div className={chartLayout.header.wrapper}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-bold text-gray-900">Heritage Hill</h2>
          <Image 
            src="/MMAP Favicon.png" 
            alt="MMAP Logo" 
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500">Operational Period</span>
          <p className="text-xl font-semibold">2019-2023</p>
        </div>
      </div>
    </div>
  )
} 