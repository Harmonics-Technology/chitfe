/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Wallet } from './Wallet';
export type WalletAccountNumber = {
    id?: string;
    dateCreated?: string;
    dateModified?: string;
    walletId?: string;
    wallet?: Wallet;
    accountNumber?: string | null;
    accountName?: string | null;
    bankName?: string | null;
    bankId?: number;
    bankSlug?: string | null;
    currency?: string | null;
    accountType?: string | null;
    accountStatus?: string | null;
    isDefault?: boolean;
    isActive?: boolean;
};
