/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetCategoryView } from './BudgetCategoryView';
import type { BudgetHistoryView } from './BudgetHistoryView';
import type { LinkedAccountView } from './LinkedAccountView';
export type BudgetView = {
    id?: string;
    name?: string | null;
    amount?: number;
    amountSpent?: number;
    remainingAmount?: number;
    spendingPercentage?: number;
    linkedAccount?: LinkedAccountView;
    budgetCategory?: BudgetCategoryView;
    startDate?: string;
    endDate?: string;
    status?: string | null;
    createdAt?: string;
    currentPeriod?: BudgetHistoryView;
    previousPeriods?: Array<BudgetHistoryView> | null;
};

