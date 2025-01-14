/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecurringPayment } from './RecurringPayment';
import type { Transaction } from './Transaction';
export type RecurringPaymentHistory = {
    id?: string;
    dateCreated?: string;
    dateModified?: string;
    recurringPaymentId?: string;
    processedDate?: string;
    amount?: number;
    status?: string | null;
    failureReason?: string | null;
    transactionReference?: string | null;
    recurringPayment?: RecurringPayment;
    transaction?: Transaction;
};

