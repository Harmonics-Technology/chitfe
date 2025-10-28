/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DayOfWeek } from './DayOfWeek';
import type { RecurringPaymentFrequency } from './RecurringPaymentFrequency';
export type CreateExternalRecurringPaymentModel = {
    title?: string | null;
    description?: string | null;
    amount?: number;
    startDate?: string;
    endDate?: string | null;
    totalPayments?: number | null;
    frequency?: RecurringPaymentFrequency;
    dayOfMonth?: number | null;
    dayOfWeek?: DayOfWeek;
    walletId?: string | null;
    linkedAccountId?: string | null;
    budgetCategoryId?: string | null;
    beneficiaryAccountNumber?: string | null;
    beneficiaryBankCode?: string | null;
};
