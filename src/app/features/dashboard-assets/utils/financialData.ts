import { operatingExpensesData } from './operatingExpenses';
import { costOfGoodsSoldData } from './costOfGoodsSoldData';
import { expensesData } from './adsMarketing';
import { financialMetricsData } from './financialMetricsData';
import { incomeData, monthlyIncomeData } from './incomeData';

export interface MonthlyData {
  [key: string]: number;
}

export interface FinancialData {
  income: {
    totalIncome: { [key: string]: number };
    online: { [key: string]: number };
    retail: { [key: string]: number };
    wholesale: { [key: string]: number };
  };
  costOfGoodsSold: {
    totalCostOfGoodsSold: { [key: string]: number };
    production: { [key: string]: number };
    inventory: { [key: string]: number };
    fulfillment: { [key: string]: number };
  };
  expenses: {
    advertisingAndMarketing: MonthlyData;
    administrative: MonthlyData;
    businessDevelopment: MonthlyData;
    facilitiesAndOperations: MonthlyData;
    logistics: MonthlyData;
    miscellaneous: MonthlyData;
    personnelExpenses: MonthlyData;
    regulatory: MonthlyData;
  };
  metrics: {
    netOperatingIncome: MonthlyData;
    roas: MonthlyData;
    grossMargin: MonthlyData;
    onlineSales: MonthlyData;
    netMargin: MonthlyData;
  };
}

export const financialData: FinancialData = {
  income: {
    totalIncome: incomeData.months.reduce((acc, month, i) => ({
      ...acc,
      [month]: monthlyIncomeData[i].value
    }), {}),
    online: incomeData.income.online.reduce((acc, value, i) => ({
      ...acc,
      [incomeData.months[i]]: value
    }), {}),
    retail: incomeData.income.retail.reduce((acc, value, i) => ({
      ...acc,
      [incomeData.months[i]]: value
    }), {}),
    wholesale: incomeData.income.wholesale.reduce((acc, value, i) => ({
      ...acc,
      [incomeData.months[i]]: value
    }), {})
  },
  costOfGoodsSold: costOfGoodsSoldData,
  expenses: {
    advertisingAndMarketing: expensesData.advertisingAndMarketing,
    ...operatingExpensesData
  },
  metrics: financialMetricsData
};

