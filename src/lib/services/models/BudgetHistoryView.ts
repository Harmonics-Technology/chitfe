/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetSpendingBreakdown } from './BudgetSpendingBreakdown';
import type { HistorySpendingBreakdown } from './HistorySpendingBreakdown';
export type BudgetHistoryView = {
    id?: string;
    budgetId?: string;
    budgetName?: string | null;
    categoryName?: string | null;
    amount?: number;
    amountSpent?: number;
    remainingAmount?: number;
    spendingPercentage?: number;
    startDate?: string;
    endDate?: string;
    month?: number;
    year?: number;
    spendingBreakdown?: Array<BudgetSpendingBreakdown> | null;
    historyBreakdown?: Array<HistorySpendingBreakdown> | null;
};
