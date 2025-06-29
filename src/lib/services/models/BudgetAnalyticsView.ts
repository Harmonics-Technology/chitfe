/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountAnalytics } from './AccountAnalytics';
import type { BudgetPeriodInfo } from './BudgetPeriodInfo';
import type { CategoryAnalytics } from './CategoryAnalytics';
import type { DailySpending } from './DailySpending';
export type BudgetAnalyticsView = {
    totalBudgeted?: number;
    totalSpent?: number;
    remainingBudget?: number;
    spendingPercentage?: number;
    period?: BudgetPeriodInfo;
    categoryBreakdown?: Array<CategoryAnalytics> | null;
    accountBreakdown?: Array<AccountAnalytics> | null;
    dailySpending?: Array<DailySpending> | null;
};
