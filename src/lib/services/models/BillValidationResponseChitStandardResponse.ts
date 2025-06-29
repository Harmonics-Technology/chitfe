/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillValidationResponse } from './BillValidationResponse';
import type { HttpStatusCode } from './HttpStatusCode';
export type BillValidationResponseChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: BillValidationResponse;
    statusCode?: HttpStatusCode;
    errors?: any;
};
