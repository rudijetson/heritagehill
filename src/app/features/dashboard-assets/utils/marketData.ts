export interface MarketMetric {
  icon: string;
  label: string;
  value: string;
  sublabel: string;
}

export const marketMetrics: MarketMetric[] = [
  {
    icon: '🎓',
    label: 'HBCU Partners',
    value: '55+',
    sublabel: 'Active partnerships'
  },
  {
    icon: '🤝',
    label: 'Divine Nine',
    value: '9',
    sublabel: 'Organization reach'
  },
  {
    icon: '📈',
    label: 'Market Size',
    value: '$2.1B',
    sublabel: 'Annual spend'
  }
]; 