import { financialData } from './financialData';
import { costOfGoodsSoldData } from './costOfGoodsSoldData';
import { expensesData } from './expensesData';
import { financialMetricsData } from './financialMetricsData';
import { profitabilityData } from './profitabilityData';

export interface DashboardData {
  totalIncome: number;
  totalExpenses: number;
  netIncome: number;
  topSellingMonths: { month: string; sales: number }[];
}

export function getDashboardData(): DashboardData {
  const totalIncome = financialData.income.totalIncome.Total as number;
  const totalExpenses = financialMetricsData.totalExpenses.Total;
  const netIncome = totalIncome - totalExpenses;

  const monthlyIncome = Object.entries(financialData.income.totalIncome)
    .filter(([month]) => month !== 'Total' && month !== '2024')
    .map(([month, sales]) => ({ month, sales: sales as number }))
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 3);

  return {
    totalIncome,
    totalExpenses,
    netIncome,
    topSellingMonths: monthlyIncome,
  };
}

export interface LineGraphData {
  month: string;
  income: number;
  cogs: number;
  grossProfit: number;
}

export function getLineGraphData(): LineGraphData[] {
  const months = Object.keys(financialData.income.totalIncome)
    .filter(month => month !== 'Total' && month !== '2024')
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  return months.map(month => {
    const income = financialData.income.totalIncome[month] as number;
    const cogs = costOfGoodsSoldData.totalCostOfGoodsSold[month];
    const grossProfit = income - cogs;

    return {
      month,
      income,
      cogs,
      grossProfit
    };
  });
}

export interface MarketingGraphData {
  month: string;
  adSpend: number;
  onlineSales: number;
}

export function getMarketingGraphData(): MarketingGraphData[] {
  const months = Object.keys(financialData.income.online)
    .filter(month => month !== 'Total' && month !== '2024')
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  return months.map(month => {
    const adSpend = expensesData.advertisingAndMarketing[month];
    const onlineSales = financialData.income.online[month] as number;

    return {
      month,
      adSpend,onlineSales
    };
  });
}

export interface SalesChannelData {
  month: string;
  online: number;
  retail: number;
  wholesale: number;
}

export function getSalesChannelData(): SalesChannelData[] {
  const months = Object.keys(financialData.income.online)
    .filter(month => month !== 'Total' && month !== '2024')
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  return months.map(month => ({
    month,
    online: financialData.income.online[month] as number,
    retail: financialData.income.retail[month] as number,
    wholesale: financialData.income.wholesale[month] as number,
  }));
}

// Financial Overview Graph Data
export interface FinancialOverviewData {
  month: string;
  income: number;
  cogs: number;
  operatingExpenses: number;
}

export function getFinancialOverviewData(): FinancialOverviewData[] {
  const months = Object.keys(financialData.income.totalIncome)
    .filter(month => month !== 'Total' && month !== '2024')
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  return months.map(month => ({
    month,
    income: financialData.income.totalIncome[month] as number,
    cogs: costOfGoodsSoldData.totalCostOfGoodsSold[month],
    operatingExpenses: financialMetricsData.totalExpenses[month]
  }));
}

// Profitability Graph Data
export interface ProfitabilityData {
  month: string;
  grossProfit: number;
  netOperatingIncome: number;
}

export function getProfitabilityData(): ProfitabilityData[] {
  const months = Object.keys(profitabilityData.grossProfit)
    .filter(month => month !== 'Total' && month !== '2024')
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  return months.map(month => ({
    month,
    grossProfit: profitabilityData.grossProfit[month as keyof typeof profitabilityData.grossProfit],
    netOperatingIncome: financialMetricsData.netOperatingIncome[month as keyof typeof financialMetricsData.netOperatingIncome]
  }));
}

