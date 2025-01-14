/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KycTypes } from './KycTypes';
export type UserKyc = {
    id?: string;
    dateCreated?: string;
    dateModified?: string;
    userId?: string | null;
    kycType?: KycTypes;
    value?: string | null;
    data?: string | null;
    isVerified?: boolean;
};

