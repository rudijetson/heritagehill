export interface MonthlyData {
  [key: string]: number | string;
}

export interface FinancialData {
  income: {
    online: MonthlyData;
    retail: MonthlyData;
    wholesale: MonthlyData;
    totalSales: MonthlyData;
    grantsAndDonations: MonthlyData;
    totalIncome: MonthlyData;
  };
}

export const financialData: FinancialData = {
  income: {
    online: {
      "Oct 2019": 6990.43,
      "Nov 2019": 27866.46,
      "Dec 2019": 4264.58,
      "Jan 2020": 9606.17,
      "Feb 2020": 18081.34,
      "Mar 2020": 19546.53,
      "Apr 2020": 10692.44,
      "May 2020": 63756.66,
      "Jun 2020": 69818.49,
      "Jul 2020": 40994.34,
      "August 2020": 101361.41,
      "Sep 2020": 45805.67,
      "Oct 2020": 60908.21,
      "Nov 2020": 71018.00,
      "Dec 2020": 49743.44,
      "Jan 2021": 70598.67,
      "Feb 2021": 85770.02,
      "Mar 2021": 95334.11,
      "Apr 2021": 74683.05,
      "May 2021": 105145.83,
      "Jun 2021": 93619.75,
      "Jul 2021": 76298.57,
      "August 2021": 99585.23,
      "Sep 2021": 47427.11,
      "Oct 2021": 105313.60,
      "Nov 2021": 182067.89,
      "Dec 2021": 178344.20,
      "Jan 2022": 46569.72,
      "Feb 2022": 24373.06,
      "Mar 2022": 116029.19,
      "Apr 2022": 76266.11,
      "May 2022": 15773.21,
      "Jun 2022": 20324.17,
      "Jul 2022": 26399.91,
      "August 2022": 58544.40,
      "Sep 2022": 64343.60,
      "Oct 2022": 64760.60,
      "Nov 2022": 54501.17,
      "Dec 2022": 42503.34,
      "Jan 2023": 36488.52,
      "Feb 2023": 26132.18,
      "Mar 2023": 44693.27,
      "Apr 2023": 12070.49,
      "May 2023": 8259.60,
      "Jun 2023": 8264.94,
      "Jul 2023": 13900.00,
      "Aug 2023": 0,
      "Sep 2023": 0,
      "Oct 2023": 3050.00,
      "Nov 2023": 0,
      "Dec 2023": 0,
      "2024": 0,
      "Total": 2577889.68
    },
    retail: {
      "Oct 2019": 4085.85,
      "Nov 2019": 16976.30,
      "Dec 2019": 6663.69,
      "Jan 2020": 10433.21,
      "Feb 2020": 19480.29,
      "Mar 2020": 27296.17,
      "Apr 2020": 2954.71,
      "May 2020": 0,
      "Jun 2020": 1523.11,
      "Jul 2020": 0,
      "August 2020": 0,
      "Sep 2020": -253.45,
      "Oct 2020": 802.35,
      "Nov 2020": 0,
      "Dec 2020": 791.65,
      "Jan 2021": 0,
      "Feb 2021": 0,
      "Mar 2021": 0,
      "Apr 2021": 0,
      "May 2021": 345.12,
      "Jun 2021": 4983.16,
      "Jul 2021": 1623.72,
      "August 2021": 57.92,
      "Sep 2021": 1700.00,
      "Oct 2021": 0,
      "Nov 2021": 78.74,
      "Dec 2021": 145.53,
      "Jan 2022": 7299.34,
      "Feb 2022": 287.47,
      "Mar 2022": 390.97,
      "Apr 2022": 103.53,
      "May 2022": 188.70,
      "Jun 2022": 6620.65,
      "Jul 2022": 450.00,
      "August 2022": 0,
      "Sep 2022": 0,
      "Oct 2022": 0,
      "Nov 2022": 0,
      "Dec 2022": 0,
      "Jan 2023": 6500.00,
      "Feb 2023": 3000.00,
      "Mar 2023": 900.00,
      "Apr 2023": 14952.47,
      "May 2023": 1740.00,
      "Jun 2023": 0,
      "Jul 2023": 0,
      "Aug 2023": 1780.00,
      "Sep 2023": 70.00,
      "Oct 2023": 3000.00,
      "Nov 2023": 5670.00,
      "Dec 2023": 2200.00,
      "2024": 0,
      "Total": 154841.20
    },
    wholesale: {
      "Oct 2019": 1530.00,
      "Nov 2019": 0,
      "Dec 2019": 0,
      "Jan 2020": 0,
      "Feb 2020": 0,
      "Mar 2020": 0,
      "Apr 2020": 0,
      "May 2020": 3625.00,
      "Jun 2020": 0,
      "Jul 2020": 0,
      "August 2020": 0,
      "Sep 2020": 0,
      "Oct 2020": 0,
      "Nov 2020": 577.00,
      "Dec 2020": 0,
      "Jan 2021": 150.00,
      "Feb 2021": 0,
      "Mar 2021": 0,
      "Apr 2021": 0,
      "May 2021": 0,
      "Jun 2021": 0,
      "Jul 2021": 0,
      "August 2021": 174564.00,
      "Sep 2021": 0,
      "Oct 2021": 0,
      "Nov 2021": -118564.00,
      "Dec 2021": 0,
      "Jan 2022": 0,
      "Feb 2022": 0,
      "Mar 2022": 15286.50,
      "Apr 2022": 55370.00,
      "May 2022": 0,
      "Jun 2022": 21394.80,
      "Jul 2022": 405.00,
      "August 2022": 0,
      "Sep 2022": 83484.00,
      "Oct 2022": 3120.00,
      "Nov 2022": 0,
      "Dec 2022": -243.62,
      "Jan 2023": 0,
      "Feb 2023": 0,
      "Mar 2023": 0,
      "Apr 2023": 3797.00,
      "May 2023": 0,
      "Jun 2023": 0,
      "Jul 2023": 0,
      "Aug 2023": 0,
      "Sep 2023": 0,
      "Oct 2023": 3012.80,
      "Nov 2023": 0,
      "Dec 2023": 0,
      "2024": 0,
      "Total": 247508.48
    },
    totalSales: {
      "Oct 2019": 12606.28,
      "Nov 2019": 44842.76,
      "Dec 2019": 10928.27,
      "Jan 2020": 20039.38,
      "Feb 2020": 37561.63,
      "Mar 2020": 46842.70,
      "Apr 2020": 13647.15,
      "May 2020": 67381.66,
      "Jun 2020": 71341.60,
      "Jul 2020": 40994.34,
      "August 2020": 101361.41,
      "Sep 2020": 45552.22,
      "Oct 2020": 61710.56,
      "Nov 2020": 71595.00,
      "Dec 2020": 50535.09,
      "Jan 2021": 70748.67,
      "Feb 2021": 85770.02,
      "Mar 2021": 95334.11,
      "Apr 2021": 74683.05,
      "May 2021": 105490.95,
      "Jun 2021": 98602.91,
      "Jul 2021": 77922.29,
      "August 2021": 274207.15,
      "Sep 2021": 49127.11,
      "Oct 2021": 105313.60,
      "Nov 2021": 63582.63,
      "Dec 2021": 178489.73,
      "Jan 2022": 53869.06,
      "Feb 2022": 24660.53,
      "Mar 2022": 131706.66,
      "Apr 2022": 131739.64,
      "May 2022": 15961.91,
      "Jun 2022": 48339.62,
      "Jul 2022": 27254.91,
      "August 2022": 58544.40,
      "Sep 2022": 147827.60,
      "Oct 2022": 67880.60,
      "Nov 2022": 54501.17,
      "Dec 2022": 42259.72,
      "Jan 2023": 42988.52,
      "Feb 2023": 29132.18,
      "Mar 2023": 45593.27,
      "Apr 2023": 30819.96,
      "May 2023": 9999.60,
      "Jun 2023": 8264.94,
      "Jul 2023": 13900.00,
      "Aug 2023": 1780.00,
      "Sep 2023": 70.00,
      "Oct 2023": 9062.80,
      "Nov 2023": 5670.00,
      "Dec 2023": 2200.00,
      "2024": 0,
      "Total": 2980239.36
    },
    grantsAndDonations: {
      "Oct 2019": 0,
      "Nov 2019": 0,
      "Dec 2019": 0,
      "Jan 2020": 0,
      "Feb 2020": 0,
      "Mar 2020": 0,
      "Apr 2020": 2500.00,
      "May 2020": 0,
      "Jun 2020": 1000.00,
      "Jul 2020": 0,
      "August 2020": 0,
      "Sep 2020": 0,
      "Oct 2020": 0,
      "Nov 2020": 0,
      "Dec 2020": 0,
      "Jan 2021": 0,
      "Feb 2021": 0,
      "Mar 2021": 0,
      "Apr 2021": 7402.00,
      "May 2021": 7402.00,
      "Jun 2021": 15000.00,
      "Jul 2021": 0,
      "August 2021": 0,
      "Sep 2021": 0,
      "Oct 2021": 2000.00,
      "Nov 2021": 0,
      "Dec 2021": 0,
      "Jan 2022": 0,
      "Feb 2022": 0,
      "Mar 2022": 0,
      "Apr 2022": 2332.14,
      "May 2022": 0,
      "Jun 2022": 0,
      "Jul 2022": 0,
      "August 2022": 0,
      "Sep 2022": 0,
      "Oct 2022": 0,
      "Nov 2022": 0,
      "Dec 2022": 0,
      "Jan 2023": 0,
      "Feb 2023": 0,
      "Mar 2023": 0,
      "Apr 2023": 0,
      "May 2023": 0,
      "Jun 2023": 0,
      "Jul 2023": 0,
      "Aug 2023": 0,
      "Sep 2023": 0,
      "Oct 2023": 0,
      "Nov 2023": 0,
      "Dec 2023": 0,
      "2024": 0,
      "Total": 37636.14
    },
    totalIncome: {
      "Oct 2019": 12606.28,
      "Nov 2019": 44842.76,
      "Dec 2019": 10928.27,
      "Jan 2020": 20039.38,
      "Feb 2020": 37561.63,
      "Mar 2020": 46842.70,
      "Apr 2020": 16147.15,
      "May 2020": 67381.66,
      "Jun 2020": 72341.60,
      "Jul 2020": 40994.34,
      "August 2020": 101361.41,
      "Sep 2020": 45552.22,
      "Oct 2020": 61710.56,
      "Nov 2020": 71595.00,
      "Dec 2020": 50535.09,
      "Jan 2021": 70748.67,
      "Feb 2021": 85770.02,
      "Mar 2021": 95334.11,
      "Apr 2021": 82085.05,
      "May 2021": 112892.95,
      "Jun 2021": 113602.91,
      "Jul 2021": 77922.29,
      "August 2021": 274207.15,
      "Sep 2021": 49127.11,
      "Oct 2021": 107313.60,
      "Nov 2021": 63582.63,
      "Dec 2021": 178489.73,
      "Jan 2022": 53869.06,
      "Feb 2022": 24660.53,
      "Mar 2022": 131706.66,
      "Apr 2022": 134071.78,
      "May 2022": 15961.91,
      "Jun 2022": 48339.62,
      "Jul 2022": 27254.91,
      "August 2022": 58544.40,
      "Sep 2022": 147827.60,
      "Oct 2022": 67880.60,
      "Nov 2022": 54501.17,
      "Dec 2022": 42259.72,
      "Jan 2023": 42988.52,
      "Feb 2023": 29132.18,
      "Mar 2023": 45593.27,
      "Apr 2023": 30819.96,
      "May 2023": 9999.60,
      "Jun 2023": 8264.94,
      "Jul 2023": 13900.00,
      "Aug 2023": 1780.00,
      "Sep 2023": 70.00,
      "Oct 2023": 9062.80,
      "Nov 2023": 5670.00,
      "Dec 2023": 2200.00,
      "2024": 0,
      "Total": 3017875.50
    }
  }
};

