/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetCategory } from './BudgetCategory';
import type { BudgetHistory } from './BudgetHistory';
import type { BudgetSpending } from './BudgetSpending';
import type { BudgetType } from './BudgetType';
import type { GenericStatus } from './GenericStatus';
import type { LinkedAccount } from './LinkedAccount';
import type { Transaction } from './Transaction';
import type { User } from './User';
export type Budget = {
    id?: string;
    dateCreated?: string;
    dateModified?: string;
    name?: string | null;
    userId?: string;
    user?: User;
    amount?: number;
    linkedAccountId?: string | null;
    linkedAccount?: LinkedAccount;
    budgetCategoryId?: string | null;
    budgetCategory?: BudgetCategory;
    startDate?: string;
    endDate?: string;
    autoRenew?: boolean;
    trackAllAccounts?: boolean;
    budgetStatusId?: number;
    budgetStatus?: GenericStatus;
    budgetTypeId?: number;
    budgetType?: BudgetType;
    budgetSpending?: Array<BudgetSpending> | null;
    transactions?: Array<Transaction> | null;
    budgetHistory?: Array<BudgetHistory> | null;
};
