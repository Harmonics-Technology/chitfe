/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Budget } from './Budget';
import type { Transaction } from './Transaction';
export type BudgetSpending = {
    id?: string;
    dateCreated?: string;
    dateModified?: string;
    budgetId?: string;
    budget?: Budget;
    amountSpent?: number;
    spendingDate?: string;
    transactionId?: string | null;
    transaction?: Transaction;
};

