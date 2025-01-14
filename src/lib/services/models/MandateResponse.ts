/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OtpDestinations } from './OtpDestinations';
import type { TransferDestination } from './TransferDestination';
export type MandateResponse = {
    id?: string | null;
    status?: string | null;
    mandate_type?: string | null;
    debit_type?: string | null;
    ready_to_debit?: boolean | null;
    nibss_code?: string | null;
    approved?: boolean | null;
    reference?: string | null;
    account_name?: string | null;
    account_number?: string | null;
    bank?: string | null;
    bank_code?: string | null;
    customer?: string | null;
    description?: string | null;
    live_mode?: boolean | null;
    start_date?: string | null;
    end_date?: string | null;
    date?: string | null;
    amount?: number | null;
    otp_destinations?: OtpDestinations;
    transfer_destinations?: Array<TransferDestination> | null;
};

