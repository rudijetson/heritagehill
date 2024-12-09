interface MonthlyIncome {
  month: string;
  value: number;
}

interface IncomeTotals {
  online: number;
  retail: number;
  wholesale: number;
  grantsAndDonations: number;
  grandTotal: number;
}

export const incomeData: { 
  months: string[],
  income: {
    online: number[],
    retail: number[],
    wholesale: number[],
    grantsAndDonations: number[]
  },
  incomeTotals: IncomeTotals
} = {
  months: [
    'Oct 2019', 'Nov 2019', 'Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020', 
    'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020',
    'Oct 2020', 'Nov 2020', 'Dec 2020', 'Jan 2021', 'Feb 2021', 'Mar 2021',
    'Apr 2021', 'May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021',
    'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022',
    'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022',
    'Oct 2022', 'Nov 2022', 'Dec 2022', 'Jan 2023', 'Feb 2023', 'Mar 2023',
    'Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023',
    'Oct 2023', 'Nov 2023', 'Dec 2023'
  ],
  income: {
    online: [6990.43, 27866.46, 4264.58, 9606.17, 18081.34, 19546.53, 10692.44, 63756.66,
      69818.49, 40994.34, 101361.41, 45805.67, 60908.21, 71018.0, 49743.44,
      70598.67, 85770.02, 95334.11, 74683.05, 105145.83, 93619.75, 76298.57,
      99585.23, 47427.11, 105313.6, 182067.89, 178344.2, 46569.72, 24373.06,
      116029.19, 76266.11, 15773.21, 20324.17, 26399.91, 58544.4, 64343.6,
      64760.6, 54501.17, 42503.34, 36488.52, 26132.18, 44693.27, 12070.49, 8259.6,
      8264.94, 13900.0, 0, 0, 3050.0, 0, 0, 0],
    retail: [4085.85, 16976.3, 6663.69, 10433.21, 19480.29, 27296.17, 2954.71, 0, 1523.11,
      0, 0, -253.45, 802.35, 0, 791.65, 0, 0, 0, 0, 345.12, 4983.16, 1623.72, 57.92,
      1700.0, 0, 78.74, 145.53, 7299.34, 287.47, 390.97, 103.53, 188.7, 6620.65,
      450.0, 0, 0, 0, 0, 0, 6500.0, 3000.0, 900.0, 14952.47, 1740.0, 0, 0, 1780.0,
      70.0, 3000.0, 5670.0, 2200.0, 0],
    wholesale: [1530.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 577.0, 0, 150.0, 0, 0, 0, 0,
      0, 0, 174564.0, 0, 0, -118564.0, 0, 0, 0, 15286.5, 55370.0, 0, 21394.8, 405.0,
      0, 83484.0, 3120.0, 0, -243.62, 0, 0, 0, 3797.0, 0, 0, 0, 0, 0, 3012.8, 0, 0, 0],
    grantsAndDonations: [0, 0, 0, 0, 0, 2500.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000.0, 0, 0,
      0, 0, 0, 0, 7402.0, 7402.0, 15000.0, 0, 0, 0, 2000.0, 0, 0, 0, 0, 2332.14, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  incomeTotals: {
    online: 2577889.68,
    retail: 154841.20,
    wholesale: 243883.48,
    grantsAndDonations: 37636.14,
    grandTotal: 3017875.50
  }
};

// Calculate total monthly income from all sources
export const monthlyIncomeData: MonthlyIncome[] = [
  { month: 'Oct 2019', value: 12606.28 },
  { month: 'Nov 2019', value: 44842.76 },
  { month: 'Dec 2019', value: 10928.27 },
  { month: 'Jan 2020', value: 20039.38 },
  { month: 'Feb 2020', value: 37561.63 },
  { month: 'Mar 2020', value: 46842.70 },
  { month: 'Apr 2020', value: 16147.15 },
  { month: 'May 2020', value: 67381.66 },
  { month: 'Jun 2020', value: 72341.60 },
  { month: 'Jul 2020', value: 40994.34 },
  { month: 'Aug 2020', value: 101361.41 },
  { month: 'Sep 2020', value: 45552.22 },
  { month: 'Oct 2020', value: 61710.56 },
  { month: 'Nov 2020', value: 71595.00 },
  { month: 'Dec 2020', value: 50535.09 },
  { month: 'Jan 2021', value: 70748.67 },
  { month: 'Feb 2021', value: 85770.02 },
  { month: 'Mar 2021', value: 95334.11 },
  { month: 'Apr 2021', value: 82085.05 },
  { month: 'May 2021', value: 112892.95 },
  { month: 'Jun 2021', value: 113602.91 },
  { month: 'Jul 2021', value: 77922.29 },
  { month: 'Aug 2021', value: 274207.15 },
  { month: 'Sep 2021', value: 49127.11 },
  { month: 'Oct 2021', value: 107313.60 },
  { month: 'Nov 2021', value: 63582.63 },
  { month: 'Dec 2021', value: 178489.73 },
  { month: 'Jan 2022', value: 53869.06 },
  { month: 'Feb 2022', value: 24660.53 },
  { month: 'Mar 2022', value: 131706.66 },
  { month: 'Apr 2022', value: 134071.78 },
  { month: 'May 2022', value: 15961.91 },
  { month: 'Jun 2022', value: 48339.62 },
  { month: 'Jul 2022', value: 27254.91 },
  { month: 'Aug 2022', value: 58544.40 },
  { month: 'Sep 2022', value: 147827.60 },
  { month: 'Oct 2022', value: 67880.60 },
  { month: 'Nov 2022', value: 54501.17 },
  { month: 'Dec 2022', value: 42259.72 },
  { month: 'Jan 2023', value: 42988.52 },
  { month: 'Feb 2023', value: 29132.18 },
  { month: 'Mar 2023', value: 45593.27 },
  { month: 'Apr 2023', value: 30819.96 },
  { month: 'May 2023', value: 9999.60 },
  { month: 'Jun 2023', value: 8264.94 },
  { month: 'Jul 2023', value: 13900.00 },
  { month: 'Aug 2023', value: 1780.00 },
  { month: 'Sep 2023', value: 70.00 },
  { month: 'Oct 2023', value: 9062.80 },
  { month: 'Nov 2023', value: 5670.00 },
  { month: 'Dec 2023', value: 2200.00 }
];

// Helper function to get total income for any given month
export const getMonthlyTotal = (month: string): number => {
  const monthData = monthlyIncomeData.find(data => data.month === month);
  return monthData ? monthData.value : 0;
};