/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Budget } from './Budget';
import type { BudgetSpending } from './BudgetSpending';
export type BudgetHistory = {
    id?: string;
    dateCreated?: string;
    dateModified?: string;
    budgetId?: string;
    budget?: Budget;
    amount?: number;
    amountSpent?: number;
    startDate?: string;
    endDate?: string;
    month?: number;
    year?: number;
    budgetSpendings?: Array<BudgetSpending> | null;
};

