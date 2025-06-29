/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountView } from './AccountView';
import type { BudgetCategoryView } from './BudgetCategoryView';
export type TransactionView = {
    walletId?: string | null;
    amount?: number;
    transactionStatusId?: number;
    transactionStatus?: string | null;
    transactionReference?: string | null;
    transactionDescription?: string | null;
    transactionType?: string | null;
    serviceProvider?: string | null;
    serviceProviderReference?: string | null;
    serviceProviderResponse?: string | null;
    linkedAccountId?: string | null;
    linkedAccount?: AccountView;
    categories?: Array<BudgetCategoryView> | null;
    isAiCategorized?: boolean;
};
