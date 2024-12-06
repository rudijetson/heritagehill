import React from 'react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface TimelineEvent {
  date: string;
  title: string;
  content: ReactNode;
}

interface TimelineData {
  [year: string]: TimelineEvent[];
}

export const timelineData: TimelineData = {
  2019: [
    {
      date: "Fall 2019",
      title: "Company Founded",
      content: (
        <>
          Heritage Hill LLC founded by{' '}
          <Link href="https://www.linkedin.com/in/brandonzhoff" className="text-blue-600 hover:underline">
            Brandon Z. Hoff
          </Link>
          {' '}in his basement, starting a journey to build economic infrastructure within the Black diaspora.
        </>
      )
    }
  ],
  2020: [
    {
      date: "March-April 2020",
      title: "COVID-19 Adaptation",
      content: "When COVID-19 shutdowns impacted retail operations, we pivoted to a complete online model. Expanded to a 500-square-foot facility as online sales grew during the pandemic."
    },
    {
      date: "May-June 2020",
      title: "Mission Refinement & Expansion",
      content: "The George Floyd protests deepened our commitment to building economic infrastructure within the Black diaspora and HBCU ecosystem. Expanded to a 1,200-square-foot facility as sales continued to grow."
    },
    {
      date: "November 2020",
      title: "In-House Production Begins",
      content: "Leased our first embroidery machine to bring production in-house, creating local jobs and improving quality control. Initial licensing agreements secured with CLC and several Divine Nine organizations, covering approximately 25 schools."
    }
  ],
  2021: [
    {
      date: "April 2021",
      title: "Digital Marketing Disruption",
      content: (
        <>
          Faced new challenges with{' '}
          <Link href="https://www.apple.com/newsroom/2021/04/ios-14-5-offers-unlock-iphone-with-apple-watch-diverse-siri-voices-and-more/" 
            className="text-blue-600 hover:underline">
            Apple&apos;s iOS 14.5 privacy changes
          </Link>
          , significantly impacting our digital marketing effectiveness.
        </>
      )
    },
    {
      date: "July 2021",
      title: "Production Expansion",
      content: "Brought printing capabilities in-house, expanding our production capacity and vertical integration. Moved to 1,800-square-foot facility to accommodate growth."
    },
    {
      date: "July-November 2021",
      title: "Major Retail Partnership & Setbacks",
      content: "Secured $330,000 Belk purchase order, funded through high-interest credit cards and extractive capital. However, faced significant setback when $274,000 worth of inventory was returned due to licensing issues."
    },
    {
      date: "December 2021",
      title: "Product Line Expansion",
      content: "Reached 3,000 SKUs and expanded licensing agreements to include 55+ organizations, with additional CLC schools and Divine Nine partnerships."
    }
  ],
  2022: [
    {
      date: "January 2022",
      title: "Marketing Strategy Pivot",
      content: (
        <>
          <Link href="https://www.facebook.com/business/news/removing-certain-ad-targeting-options-and-expanding-our-ad-controls" 
            className="text-blue-600 hover:underline">
            Meta removed detailed ad targeting options
          </Link>
          , requiring significant adaptation of our marketing strategy.
        </>
      )
    },
    {
      date: "February 2022",
      title: "Cooperative Transformation",
      content: "Transitioned to a worker-owned cooperative and secured a $225,000 non-extractive loan to refinance predatory debt. Moved into an 8,000-square-foot facility while expanding Belk partnership to 125 stores."
    },
    {
      date: "November 2022",
      title: "Digital Marketing Crisis",
      content: "Customer acquisition costs increased 127% year-over-year, while ROAS dropped from historical 5.8x to 3.8x. These changes made it impossible to run ad campaigns at scale, forcing a pivot away from paid digital marketing."
    }
  ],
  2023: [
    {
      date: "March 2023",
      title: "Financial Restructuring",
      content: "Consolidated loans into a $375,000 agreement to refinance high-interest credit card debt. Implemented major cost-cutting measures to stabilize operations."
    },
    {
      date: "May 2023",
      title: "Operational Downsizing",
      content: "Downsized to a 2,500-square-foot facility due to financial strain and reduced operations."
    },
    {
      date: "October-December 2023",
      title: "Operations Wind Down",
      content: "Did not renew equipment leases and ceased physical operations. Began transition to research and development phase focusing on cooperative economic models."
    }
  ],
  2024: [
    {
      date: "2024",
      title: "Research & Ecosystem Building",
      content: "Partnered with Morehouse College on cooperative ecosystem building initiatives. Participated in Project Equity Summit to develop cooperative framework knowledge. Established conceptual frameworks for scaling cooperative networks within the Black diaspora."
    }
  ]
} 