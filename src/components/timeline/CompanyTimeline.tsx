"use client"

import { useState } from 'react'
import { timelineData } from './timelineData'
import { cn } from "@/lib/utils"

type TimelineYear = '2019' | '2020' | '2021' | '2022' | '2023' | '2024'

export function CompanyTimeline() {
  const [activeYear, setActiveYear] = useState<TimelineYear | null>(null)

  const toggleYear = (year: TimelineYear) => {
    setActiveYear(current => current === year ? null : year)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h4 className="text-2xl font-bold text-gray-900 mb-8">Our Journey</h4>
      
      {/* Year buttons in a grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {Object.keys(timelineData).map((year) => (
          <button
            key={year}
            onClick={() => toggleYear(year as TimelineYear)}
            className={cn(
              "w-full px-6 py-3 rounded-lg font-semibold transition-all",
              "border-2 border-blue-500 hover:bg-blue-50",
              activeYear === year
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-white text-blue-900"
            )}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Timeline content */}
      <div className="space-y-16">
        {Object.entries(timelineData)
          .filter(([year]) => year === activeYear)
          .map(([year, events]) => (
            <div key={year} className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-200" />
              
              <div className="space-y-8 pl-8">
                {events.map((event, index) => (
                  <div 
                    key={index}
                    className="relative"
                  >
                    <div className="absolute -left-[1.65rem] top-3 w-3 h-3 bg-white border-2 border-blue-500 rounded-full" />
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100
                                  hover:shadow-md transition-shadow">
                      <div className="text-sm font-medium text-blue-600 mb-2">
                        {event.date}
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">
                        {event.title}
                      </h5>
                      <div className="text-gray-600">
                        {event.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
} 