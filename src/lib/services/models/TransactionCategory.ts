/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetCategory } from './BudgetCategory';
import type { Transaction } from './Transaction';
export type TransactionCategory = {
    id?: string;
    dateCreated?: string;
    dateModified?: string;
    transactionId?: string;
    transaction?: Transaction;
    budgetCategoryId?: string;
    budgetCategory?: BudgetCategory;
    isAiCategorized?: boolean;
};

