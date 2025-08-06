/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SpendingBreakdown } from './SpendingBreakdown';
export type BudgetSpendingView = {
    budgetId?: string;
    budgetName?: string | null;
    totalBudget?: number;
    amountSpent?: number;
    remainingAmount?: number;
    dailySpending?: Array<SpendingBreakdown> | null;
};
