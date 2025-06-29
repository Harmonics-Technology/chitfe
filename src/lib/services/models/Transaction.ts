/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Budget } from './Budget';
import type { LinkedAccount } from './LinkedAccount';
import type { TransactionCategory } from './TransactionCategory';
import type { TransactionStatus } from './TransactionStatus';
import type { TransactionType } from './TransactionType';
import type { Wallet } from './Wallet';
export type Transaction = {
    id?: string;
    dateCreated?: string;
    dateModified?: string;
    walletId?: string | null;
    wallet?: Wallet;
    amount?: number;
    transactionStatusId?: number;
    transactionStatus?: TransactionStatus;
    transactionReference?: string | null;
    transactionDescription?: string | null;
    transactionTypeId?: number;
    transactionType?: TransactionType;
    serviceProvider?: string | null;
    serviceProviderReference?: string | null;
    serviceProviderResponse?: string | null;
    linkedAccountId?: string | null;
    linkedAccount?: LinkedAccount;
    additionalDataJson?: string | null;
    budgetId?: string | null;
    budget?: Budget;
    transactionCategories?: Array<TransactionCategory> | null;
    additionalData?: Record<string, string> | null;
};
