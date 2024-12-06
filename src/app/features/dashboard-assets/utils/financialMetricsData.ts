export interface MonthlyData {
  [key: string]: number;
}

export interface FinancialMetricsData {
  totalExpenses: MonthlyData;
  netOperatingIncome: MonthlyData;
  roas: MonthlyData;
  grossMargin: MonthlyData;
  onlineSales: MonthlyData;
  netMargin: MonthlyData;
}

export const financialMetricsData: FinancialMetricsData = {
  totalExpenses: {
    "Oct 2019": 407.59,
    "Nov 2019": 16332.55,
    "Dec 2019": 4365.61,
    "Jan 2020": 4087.83,
    "Feb 2020": 8492.50,
    "Mar 2020": 16483.75,
    "Apr 2020": 2703.41,
    "May 2020": 9790.63,
    "Jun 2020": 14323.06,
    "Jul 2020": 26101.23,
    "August 2020": 41919.14,
    "Sep 2020": 4349.58,
    "Oct 2020": 24718.68,
    "Nov 2020": 18923.82,
    "Dec 2020": 28913.47,
    "Jan 2021": 24350.92,
    "Feb 2021": 14056.83,
    "Mar 2021": 12319.74,
    "Apr 2021": 29095.34,
    "May 2021": 27936.98,
    "Jun 2021": 67517.37,
    "Jul 2021": 48436.32,
    "August 2021": 34603.66,
    "Sep 2021": 41690.73,
    "Oct 2021": 52041.43,
    "Nov 2021": 79399.03,
    "Dec 2021": 77620.14,
    "Jan 2022": 45417.80,
    "Feb 2022": 55141.73,
    "Mar 2022": 73143.99,
    "Apr 2022": 76291.13,
    "May 2022": 29053.62,
    "Jun 2022": 35089.92,
    "Jul 2022": 31020.55,
    "August 2022": 56384.93,
    "Sep 2022": 54426.22,
    "Oct 2022": 49133.39,
    "Nov 2022": 52489.58,
    "Dec 2022": 25169.84,
    "Jan 2023": 22010.84,
    "Feb 2023": 23934.07,
    "Mar 2023": 42480.44,
    "Apr 2023": 23459.02,
    "May 2023": 23814.24,
    "Jun 2023": 28896.65,
    "Jul 2023": 20810.96,
    "Aug 2023": 12387.08,
    "Sep 2023": 9621.55,
    "Oct 2023": 8151.15,
    "Nov 2023": 5339.53,
    "Dec 2023": 3138.60,
    "2024": 112.27,
    "Total": 1537900.44
  },
  netOperatingIncome: {
    "Oct 2019": 5859.18,
    "Nov 2019": 19492.23,
    "Dec 2019": -16707.01,
    "Jan 2020": -1395.77,
    "Feb 2020": -136.10,
    "Mar 2020": 10752.15,
    "Apr 2020": 1959.40,
    "May 2020": 30174.62,
    "Jun 2020": 28164.21,
    "Jul 2020": -24719.43,
    "Aug 2020": -1788.24,
    "Sep 2020": -1536.97,
    "Oct 2020": -16667.94,
    "Nov 2020": -11406.79,
    "Dec 2020": -11590.90,
    "Jan 2021": 4667.20,
    "Feb 2021": 3732.49,
    "Mar 2021": 45885.01,
    "Apr 2021": 9553.06,
    "May 2021": 34978.02,
    "Jun 2021": -31226.78,
    "Jul 2021": -18800.58,
    "Aug 2021": 190352.98,
    "Sep 2021": -54590.23,
    "Oct 2021": 8457.33,
    "Nov 2021": -107458.93,
    "Dec 2021": 22775.67,
    "Jan 2022": -22788.44,
    "Feb 2022": -49917.46,
    "Mar 2022": 21266.79,
    "Apr 2022": 33019.17,
    "May 2022": -18224.79,
    "Jun 2022": 9338.77,
    "Jul 2022": -60249.81,
    "Aug 2022": -14630.31,
    "Sep 2022": 75861.35,
    "Oct 2022": -15.65,
    "Nov 2022": -74152.18,
    "Dec 2022": -83569.51,
    "Jan 2023": 6635.82,
    "Feb 2023": -3426.75,
    "Mar 2023": -15706.01,
    "Apr 2023": 5787.57,
    "May 2023": -19243.10,
    "Jun 2023": -26816.33,
    "Jul 2023": -9245.81,
    "Aug 2023": -14623.69,
    "Sep 2023": -12286.04,
    "Oct 2023": -598.83,
    "Nov 2023": -967.95,
    "Dec 2023": -938.60,
    "2024": -112.27,
    "Total": -156826.18
  },
  roas: {
    "Oct 2019": 30.93,
    "Nov 2019": 4.04,
    "Dec 2019": 3.21,
    "Jan 2020": 11.64,
    "Feb 2020": 6.68,
    "Mar 2020": 3.37,
    "Apr 2020": 13.34,
    "May 2020": 12.22,
    "Jun 2020": 12.61,
    "Jul 2020": 2.46,
    "August 2020": 3.03,
    "Sep 2020": 85.95,
    "Oct 2020": 3.00,
    "Nov 2020": 8.39,
    "Dec 2020": 6.95,
    "Jan 2021": 13.63,
    "Feb 2021": 200.07,
    "Mar 2021": 181.68,
    "Apr 2021": 7.00,
    "May 2021": 9.80,
    "Jun 2021": 2.15,
    "Jul 2021": 4.95,
    "August 2021": 54.85,
    "Sep 2021": 2.85,
    "Oct 2021": 3.80,
    "Nov 2021": 1.23,
    "Dec 2021": 4.44,
    "Jan 2022": 2.40,
    "Feb 2022": 1.28,
    "Mar 2022": 5.27,
    "Apr 2022": 3.38,
    "May 2022": 2.33,
    "Jun 2022": 4.02,
    "Jul 2022": 8.02,
    "August 2022": 2.43,
    "Sep 2022": 5.97,
    "Oct 2022": 3.03,
    "Nov 2022": 2.12,
    "Dec 2022": 84.26,
    "Jan 2023": 27.86,
    "Feb 2023": 9.32,
    "Mar 2023": 2.74,
    "Apr 2023": 27.55,
    "May 2023": 8.04,
    "Jun 2023": 1.66,
    "Jul 2023": 2.15,
    "Aug 2023": 0.84,
    "Sep 2023": 0.22,
    "Oct 2023": 16.32,
    "Nov 2023": 2.39,
    "Dec 2023": 0,
    "2024": 0,
    "Total": 17.65
  },
  grossMargin: {
    "Oct 2019": 49.71,
    "Nov 2019": 79.89,
    "Dec 2019": -112.93,
    "Jan 2020": 13.43,
    "Feb 2020": 22.25,
    "Mar 2020": 58.14,
    "Apr 2020": 34.17,
    "May 2020": 59.31,
    "Jun 2020": 59.55,
    "Jul 2020": 3.37,
    "August 2020": 39.59,
    "Sep 2020": 6.17,
    "Oct 2020": 13.05,
    "Nov 2020": 10.50,
    "Dec 2020": 34.28,
    "Jan 2021": 41.02,
    "Feb 2021": 20.74,
    "Mar 2021": 61.05,
    "Apr 2021": 51.75,
    "May 2021": 59.64,
    "Jun 2021": 36.80,
    "Jul 2021": 38.03,
    "August 2021": 82.04,
    "Sep 2021": -26.26,
    "Oct 2021": 57.45,
    "Nov 2021": -44.13,
    "Dec 2021": 56.25,
    "Jan 2022": 42.01,
    "Feb 2022": 21.18,
    "Mar 2022": 71.68,
    "Apr 2022": 82.97,
    "May 2022": 67.84,
    "Jun 2022": 91.91,
    "Jul 2022": -107.24,
    "August 2022": 71.32,
    "Sep 2022": 88.13,
    "Oct 2022": 72.36,
    "Nov 2022": -39.75,
    "Dec 2022": -138.19,
    "Jan 2023": 66.64,
    "Feb 2023": 70.39,
    "Mar 2023": 58.72,
    "Apr 2023": 94.89,
    "May 2023": 45.71,
    "Jun 2023": 25.17,
    "Jul 2023": 83.20,
    "Aug 2023": -125.65,
    "Sep 2023": -3806.41,
    "Oct 2023": 83.33,
    "Nov 2023": 77.10,
    "Dec 2023": 0,
    "2024": 0,
    "Total": -42.27
  },
  onlineSales: {
    "Oct 2019": 55.45,
    "Nov 2019": 62.14,
    "Dec 2019": 39.02,
    "Jan 2020": 47.94,
    "Feb 2020": 48.14,
    "Mar 2020": 41.73,
    "Apr 2020": 78.35,
    "May 2020": 94.62,
    "Jun 2020": 97.87,
    "Jul 2020": 100.00,
    "August 2020": 100.00,
    "Sep 2020": 100.56,
    "Oct 2020": 98.70,
    "Nov 2020": 99.19,
    "Dec 2020": 98.43,
    "Jan 2021": 99.79,
    "Feb 2021": 100.00,
    "Mar 2021": 100.00,
    "Apr 2021": 100.00,
    "May 2021": 99.67,
    "Jun 2021": 94.95,
    "Jul 2021": 97.92,
    "August 2021": 36.32,
    "Sep 2021": 96.54,
    "Oct 2021": 100.00,
    "Nov 2021": 286.35,
    "Dec 2021": 99.92,
    "Jan 2022": 86.45,
    "Feb 2022": 98.83,
    "Mar 2022": 88.10,
    "Apr 2022": 57.89,
    "May 2022": 98.82,
    "Jun 2022": 42.04,
    "Jul 2022": 96.86,
    "August 2022": 100.00,
    "Sep 2022": 43.53,
    "Oct 2022": 95.40,
    "Nov 2022": 100.00,
    "Dec 2022": 100.58,
    "Jan 2023": 84.88,
    "Feb 2023": 89.70,
    "Mar 2023": 98.03,
    "Apr 2023": 39.16,
    "May 2023": 82.60,
    "Jun 2023": 100.00,
    "Jul 2023": 100.00,
    "Aug 2023": 0,
    "Sep 2023": 0,
    "Oct 2023": 33.65,
    "Nov 2023": 0,
    "Dec 2023": 0,
    "2024": 0,
    "Total": 86.50
  },
  netMargin: {
    "Oct 2019": 46.48,
    "Nov 2019": 43.47,
    "Dec 2019": -152.88,
    "Jan 2020": -6.97,
    "Feb 2020": -0.36,
    "Mar 2020": 22.95,
    "Apr 2020": 14.36,
    "May 2020": 44.78,
    "Jun 2020": 39.48,
    "Jul 2020": -60.30,
    "August 2020": -1.76,
    "Sep 2020": -3.37,
    "Oct 2020": -27.01,
    "Nov 2020": -15.93,
    "Dec 2020": -22.94,
    "Jan 2021": 6.60,
    "Feb 2021": 4.35,
    "Mar 2021": 48.13,
    "Apr 2021": 12.79,
    "May 2021": 33.16,
    "Jun 2021": -31.67,
    "Jul 2021": -24.13,
    "August 2021August 2021": 69.42,
    "Sep 2021": -111.12,
    "Oct 2021": 8.03,
    "Nov 2021": -169.01,
    "Dec 2021": 12.76,
    "Jan 2022": -42.30,
    "Feb 2022": -202.42,
    "Mar 2022": 16.15,
    "Apr 2022": 25.06,
    "May 2022": -114.18,
    "Jun 2022": 19.32,
    "Jul 2022": -221.06,
    "August 2022": -24.99,
    "Sep 2022": 51.32,
    "Oct 2022": -0.02,
    "Nov 2022": -136.06,
    "Dec 2022": -197.75,
    "Jan 2023": 15.44,
    "Feb 2023": -11.76,
    "Mar 2023": -34.45,
    "Apr 2023": 18.78,
    "May 2023": -192.44,
    "Jun 2023": -324.46,
    "Jul 2023": -66.52,
    "Aug 2023": -821.56,
    "Sep 2023": -17551.49,
    "Oct 2023": -6.61,
    "Nov 2023": -17.07,
    "Dec 2023": -42.66,
    "2024": 0,
    "Total": -5.26
  }
};
