/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RecurringPaymentView = {
    id?: string;
    title?: string | null;
    description?: string | null;
    amount?: number;
    currency?: string | null;
    paymentType?: string | null;
    frequency?: string | null;
    schedule?: string | null;
    startDate?: string;
    endDate?: string | null;
    totalPayments?: number | null;
    paymentsMade?: number;
    lastProcessedDate?: string | null;
    nextProcessingDate?: string;
    status?: string | null;
    failureReason?: string | null;
    paymentSource?: string | null;
    beneficiaryName?: string | null;
    beneficiaryAccount?: string | null;
    beneficiaryBank?: string | null;
    totalAmountProcessed?: number;
    budgetCategory?: string | null;
};
