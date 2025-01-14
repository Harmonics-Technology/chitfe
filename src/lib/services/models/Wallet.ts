/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
import type { WalletAccountNumber } from './WalletAccountNumber';
import type { WalletStatus } from './WalletStatus';
import type { WalletType } from './WalletType';
export type Wallet = {
    id?: string;
    dateCreated?: string;
    dateModified?: string;
    userId?: string;
    user?: User;
    balance?: number;
    currency?: string | null;
    walletTypeId?: number;
    walletType?: WalletType;
    walletName?: string | null;
    walletStatusId?: number;
    walletStatus?: WalletStatus;
    walletAccountNumbers?: Array<WalletAccountNumber> | null;
};

