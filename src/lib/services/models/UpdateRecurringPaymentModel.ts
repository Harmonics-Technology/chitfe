/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DayOfWeek } from './DayOfWeek';
import type { RecurringPaymentFrequency } from './RecurringPaymentFrequency';
export type UpdateRecurringPaymentModel = {
    title?: string | null;
    description?: string | null;
    amount?: number | null;
    frequency?: RecurringPaymentFrequency;
    dayOfMonth?: number | null;
    dayOfWeek?: DayOfWeek;
    endDate?: string | null;
    totalPayments?: number | null;
    budgetCategoryId?: string | null;
};

