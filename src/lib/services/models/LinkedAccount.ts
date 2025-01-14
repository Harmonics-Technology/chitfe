/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MonoInstitution } from './MonoInstitution';
import type { User } from './User';
export type LinkedAccount = {
    id?: string | null;
    dateCreated?: string;
    dateModified?: string;
    userId?: string;
    user?: User;
    monoInstitutionId?: string;
    institution?: MonoInstitution;
    name?: string | null;
    type?: string | null;
    accountNumber?: string | null;
    bvn?: string | null;
    currency?: string | null;
    balance?: number;
    liveMode?: boolean;
    createdAt?: string;
    updatedAt?: string;
    hasMandate?: boolean;
};

