/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Authorization } from './Authorization';
import type { Customer } from './Customer';
import type { Plan } from './Plan';
import type { Source } from './Source';
import type { Split } from './Split';
import type { Subaccount } from './Subaccount';
export type Data = {
    id?: number;
    domain?: string | null;
    status?: string | null;
    reference?: string | null;
    amount?: number;
    message?: any;
    gateway_response?: string | null;
    paid_at?: string;
    created_at?: string;
    channel?: string | null;
    currency?: string | null;
    ip_address?: string | null;
    metadata?: string | null;
    fees_breakdown?: any;
    log?: any;
    fees?: number;
    fees_split?: any;
    authorization?: Authorization;
    customer?: Customer;
    plan?: Plan;
    subaccount?: Subaccount;
    split?: Split;
    order_id?: any;
    paidAt?: string | null;
    requested_amount?: number;
    pos_transaction_data?: any;
    source?: Source;
};
