/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetCategory } from './BudgetCategory';
import type { DayOfWeek } from './DayOfWeek';
import type { LinkedAccount } from './LinkedAccount';
import type { RecurringPaymentFrequency } from './RecurringPaymentFrequency';
import type { RecurringPaymentHistory } from './RecurringPaymentHistory';
import type { RecurringPaymentStatus } from './RecurringPaymentStatus';
import type { RecurringPaymentType } from './RecurringPaymentType';
import type { User } from './User';
import type { Wallet } from './Wallet';
export type RecurringPayment = {
    id?: string;
    dateCreated?: string;
    dateModified?: string;
    userId?: string;
    title?: string | null;
    description?: string | null;
    amount?: number;
    currency?: string | null;
    paymentType?: RecurringPaymentType;
    frequency?: RecurringPaymentFrequency;
    dayOfMonth?: number | null;
    dayOfWeek?: DayOfWeek;
    startDate?: string;
    endDate?: string | null;
    totalPayments?: number | null;
    paymentsMade?: number;
    lastProcessedDate?: string | null;
    nextProcessingDate?: string;
    status?: RecurringPaymentStatus;
    failureReason?: string | null;
    consecutiveFailures?: number;
    walletId?: string | null;
    linkedAccountId?: string | null;
    beneficiaryType?: string | null;
    beneficiaryIdentifier?: string | null;
    beneficiaryBankCode?: string | null;
    beneficiaryName?: string | null;
    budgetCategoryId?: string | null;
    billProductId?: string | null;
    customerId?: string | null;
    user?: User;
    wallet?: Wallet;
    linkedAccount?: LinkedAccount;
    budgetCategory?: BudgetCategory;
    paymentHistory?: Array<RecurringPaymentHistory> | null;
};
