/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpcomingPaymentView = {
    paymentId?: string;
    title?: string | null;
    amount?: number;
    currency?: string | null;
    scheduledDate?: string;
    paymentType?: string | null;
    beneficiaryName?: string | null;
    paymentSource?: string | null;
    sourceDetails?: string | null;
    estimatedSourceBalance?: number | null;
    sufficientBalance?: boolean;
    failureRisk?: string | null;
    budgetCategory?: string | null;
};

