/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayStackCustomer } from './PayStackCustomer';
import type { SecurityQuestion } from './SecurityQuestion';
import type { UserBiometricDevice } from './UserBiometricDevice';
import type { UserKyc } from './UserKyc';
export type User = {
    id?: string;
    userName?: string | null;
    normalizedUserName?: string | null;
    email?: string | null;
    normalizedEmail?: string | null;
    emailConfirmed?: boolean;
    passwordHash?: string | null;
    securityStamp?: string | null;
    concurrencyStamp?: string | null;
    phoneNumber?: string | null;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: string | null;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
    firstName: string;
    lastName: string;
    readonly fullName?: string | null;
    otherNames?: string | null;
    dateOfBirth?: string;
    profilePicture?: string | null;
    address?: string | null;
    referralCode?: string | null;
    referrerCode?: string | null;
    transactionPin?: string | null;
    hasTransactionPin?: boolean | null;
    kycLevel?: number;
    kycStatus?: string | null;
    payStackCustomerId?: string | null;
    payStackCustomer?: PayStackCustomer;
    chitId?: string | null;
    userKycs?: Array<UserKyc> | null;
    userBiometricDevices?: Array<UserBiometricDevice> | null;
    securityQuestions?: Array<SecurityQuestion> | null;
};
