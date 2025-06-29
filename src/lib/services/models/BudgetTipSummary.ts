/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryOverBudgetInfo } from './CategoryOverBudgetInfo';
export type BudgetTipSummary = {
    totalBudget?: number;
    totalSpent?: number;
    remainingBudget?: number;
    daysRemaining?: number;
    overBudgetCategories?: Array<CategoryOverBudgetInfo> | null;
};
