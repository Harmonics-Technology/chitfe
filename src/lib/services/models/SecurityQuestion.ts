/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
export type SecurityQuestion = {
    id?: string;
    dateCreated?: string;
    dateModified?: string;
    question?: string | null;
    answer?: string | null;
    encryptedAnswer?: string | null;
    salt?: string | null;
    keyVersion?: string | null;
    lastRotated?: string | null;
    userId?: string;
    user?: User;
};
