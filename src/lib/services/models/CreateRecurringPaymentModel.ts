/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DayOfWeek } from './DayOfWeek';
import type { RecurringPaymentFrequency } from './RecurringPaymentFrequency';
import type { RecurringPaymentType } from './RecurringPaymentType';
export type CreateRecurringPaymentModel = {
    title?: string | null;
    description?: string | null;
    amount?: number;
    paymentType?: RecurringPaymentType;
    frequency?: RecurringPaymentFrequency;
    dayOfMonth?: number | null;
    dayOfWeek?: DayOfWeek;
    startDate?: string;
    endDate?: string | null;
    totalPayments?: number | null;
    walletId?: string | null;
    linkedAccountId?: string | null;
    beneficiaryType?: string | null;
    beneficiaryIdentifier?: string | null;
    beneficiaryBankCode?: string | null;
    budgetCategoryId?: string | null;
    billProductId?: string | null;
    customerId?: string | null;
};
