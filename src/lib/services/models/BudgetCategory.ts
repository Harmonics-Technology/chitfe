/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Budget } from './Budget';
import type { TransactionCategory } from './TransactionCategory';
import type { User } from './User';
export type BudgetCategory = {
    id?: string;
    dateCreated?: string;
    dateModified?: string;
    name?: string | null;
    description?: string | null;
    isPredefined?: boolean;
    userId?: string | null;
    user?: User;
    budgets?: Array<Budget> | null;
    transactionCategories?: Array<TransactionCategory> | null;
};

