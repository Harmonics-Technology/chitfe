/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetCategoryView } from './BudgetCategoryView';
export type BudgetTransactionView = {
    id?: string;
    amount?: number;
    transactionDescription?: string | null;
    transactionType?: string | null;
    categories?: Array<BudgetCategoryView> | null;
    transactionDate?: string;
    isAiCategorized?: boolean;
};
