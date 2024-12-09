"use client"

import React, { useState } from 'react'
import { timelineData } from './timelineData'
import styles from './CompanyTimeline.module.css'

export const CompanyTimeline: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null)
  const years = Object.keys(timelineData)

  const handleYearClick = (year: string) => {
    setSelectedYear(selectedYear === year ? null : year)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <span className={styles.label}>Our Journey</span>
          <h2 className={styles.title}>Building Economic Infrastructure</h2>
        </div>
        <p className={styles.intro}>
          This section chronicles our journey from a basement startup to a cooperative model, 
          highlighting critical learnings about building resilient enterprises within the Black diaspora.
        </p>
      </div>

      {/* Year Selection */}
      <div className={styles.yearSelector}>
        {years.map((year) => (
          <button
            key={year}
            className={`${styles.yearButton} ${selectedYear === year ? styles.activeYear : ''}`}
            onClick={() => handleYearClick(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {selectedYear ? (
        <div className={styles.timeline}>
          {timelineData[selectedYear].map((event, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                {selectedYear === '2019' ? '🌱' : 
                 selectedYear === '2020' ? '🚀' :
                 selectedYear === '2021' ? '📈' :
                 selectedYear === '2022' ? '🔄' :
                 selectedYear === '2023' ? '🔧' : '🎓'}
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.date}>{event.date}</div>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <div className={styles.description}>{event.content}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>Select a year above to view key events and milestones</p>
        </div>
      )}
    </div>
  )
} 