interface MarketMetric {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
}

export const marketMetrics: MarketMetric[] = [
  {
    value: "107",
    label: "HBCUs",
    sublabel: "institutions",
    icon: "🎓"
  },
  {
    value: "9",
    label: "Divine Nine Organizations",
    sublabel: "organizations",
    icon: "🤝🏿"
  },
  {
    value: "300,000+",
    label: "Active Students",
    sublabel: "students",
    icon: "👥"
  },
  {
    value: "$20M+",
    label: "Annual Spend",
    sublabel: "spend",
    icon: "💰"
  }
]; 