"use client"

import { useState } from 'react'
import { timelineData } from './timelineData'
import { cn } from "@/lib/utils"
import { typography } from "@/app/styles/typography"

type TimelineYear = '2019' | '2020' | '2021' | '2022' | '2023' | '2024'

export function CompanyTimeline() {
  const [activeYear, setActiveYear] = useState<TimelineYear | null>(null)

  const toggleYear = (year: TimelineYear) => {
    setActiveYear(current => current === year ? null : year)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      {/* Introduction Section */}
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className={typography.h2}>Our Journey</h2>
            <p className={typography.lead}>
              This section chronicles the operational and strategic decisions that shaped our 
              path—highlighting <span className={typography.emphasis}>critical learnings about building resilient 
              micro-enterprises</span> in challenging market conditions.
            </p>
          </div>

          <div className="space-y-6">
            <p className={typography.body}>
              For businesses without substantial runway, the path to sustainability is particularly 
              demanding. <span className={typography.emphasis}>With fewer than 5% of Black-owned businesses 
              reaching $1 million in annual revenue</span>, each stage of growth brings unique challenges 
              that require careful navigation.
            </p>

            {/* Key Focus Areas */}
            <div className="bg-gray-50/50 p-8 rounded-lg border border-gray-100">
              <h4 className={typography.h4}>Key Areas of Focus</h4>
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Operational Resilience",
                    desc: "Building sustainable systems with limited resources"
                  },
                  {
                    title: "Strategic Decision-Making",
                    desc: "Navigating critical growth challenges"
                  },
                  {
                    title: "Community Impact",
                    desc: "Creating lasting economic value while maintaining mission alignment"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                    <div>
                      <span className={typography.emphasis}>{item.title}:</span>{' '}
                      <span className={typography.bodySmall}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Navigation */}
        <div className="space-y-6">
          <h4 className={typography.label}>Select Year to Explore</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {Object.keys(timelineData).map((year) => (
              <button
                key={year}
                onClick={() => toggleYear(year as TimelineYear)}
                className={cn(
                  "px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200",
                  "border hover:bg-gray-50",
                  activeYear === year
                    ? "border-gray-900 text-gray-900 bg-gray-50"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                )}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Events */}
        <div className="space-y-8">
          {Object.entries(timelineData)
            .filter(([year]) => year === activeYear)
            .map(([year, events]) => (
              <div key={year} className="relative pl-8 border-l border-gray-200">
                <div className="space-y-8">
                  {events.map((event, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[2.25rem] top-3 w-2.5 h-2.5 bg-white border-2 border-gray-300 rounded-full" />
                      
                      <div className="bg-white p-6 rounded-lg border border-gray-100 
                                    hover:border-gray-200 transition-colors">
                        <div className={cn(typography.label, "text-blue-600 mb-2")}>
                          {event.date}
                        </div>
                        <h5 className={typography.h4}>
                          {event.title}
                        </h5>
                        <p className={cn(typography.body, "mt-2")}>
                          {event.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
} 