/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BillPaymentRequest = {
    productId?: string | null;
    customerId?: string | null;
    amount?: number;
    phoneNumber?: string | null;
    email?: string | null;
    walletId?: string;
    linkedAccountId?: string | null;
    additionalParameters?: Record<string, string> | null;
};

