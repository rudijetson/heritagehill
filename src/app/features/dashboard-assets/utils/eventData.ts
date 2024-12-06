export enum EventCategory {
  Operational = "Operational",
  Marketing = "Marketing"
}

export interface Event {
  date: string;
  description: string;
  category: EventCategory;
}

export const eventData: Event[] = [
  {
    date: "Fall 2019",
    description: "Heritage Hill LLC founded by Brandon Z. Hoff in his basement as an LLC.",
    category: EventCategory.Operational
  },
  {
    date: "March 2020",
    description: "COVID-19 shutdowns began across the U.S., impacting supply chains and retail operations.",
    category: EventCategory.Operational
  },
  {
    date: "April 2020",
    description: "Moved into a 500-square-foot facility.",
    category: EventCategory.Operational
  },
  {
    date: "May 26, 2020",
    description: "George Floyd protests began, influencing the company's focus on Black diaspora and HBCUs.",
    category: EventCategory.Marketing
  },
  {
    date: "June 2020",
    description: "Expanded to a 1,200-square-foot space.",
    category: EventCategory.Operational
  },
  {
    date: "May-Dec 2020",
    description: "Omni-channel sales ramped up with significant online and in-person event-driven revenue growth.",
    category: EventCategory.Marketing
  },
  {
    date: "April 2021",
    description: "Apple launched App Tracking Transparency (ATT) in iOS 14.5, disrupting Facebook ad tracking and marketing efficiency.",
    category: EventCategory.Marketing
  },
  {
    date: "July 2021",
    description: "Moved into a 1,800-square-foot facility. Secured a $330,000 purchase order from Belk.",
    category: EventCategory.Operational
  },
  {
    date: "Fall 2021",
    description: "Partnered with Belk and D9 brands for HBCU-themed products.",
    category: EventCategory.Marketing
  },
  {
    date: "November 11, 2021",
    description: "$274,000 worth of inventory returned by Belk due to licensing issues.",
    category: EventCategory.Operational
  },
  {
    date: "December 2021",
    description: "Wrapped up the year with ~3,000 SKUs and challenges with Facebook ad ROI.",
    category: EventCategory.Marketing
  },
  {
    date: "January 19, 2022",
    description: "Meta removed thousands of detailed ad targeting options, compounding advertising challenges.",
    category: EventCategory.Marketing
  },
  {
    date: "February 2022",
    description: "Transitioned to a worker-owned cooperative, adding two additional worker-owner founders. Secured a $225,000 non-extractive loan from Co-op Cincy and Seed Commons to refinance predatory loans. Moved into an 8,000-square-foot facility.",
    category: EventCategory.Operational
  },
  {
    date: "2022",
    description: "Expanded Belk partnership to 125 stores but faced declining profitability due to increasing costs.",
    category: EventCategory.Marketing
  },
  {
    date: "March 15, 2023",
    description: "Consolidated loans into a $375,000 agreement to refinance high-interest credit card debt.",
    category: EventCategory.Operational
  },
  {
    date: "May 2023",
    description: "Downsized to a 2,500-square-foot facility due to financial strain and reduced operations.",
    category: EventCategory.Operational
  },
  {
    date: "October 2023",
    description: "Did not renew the lease for embroidery equipment and other leased machinery. Vacated the facility and ceased physical operations entirely.",
    category: EventCategory.Operational
  },
  {
    date: "November-December 2023",
    description: "Operations wound down, with minimal revenue generation.",
    category: EventCategory.Operational
  }
];