/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HttpStatusCode } from './HttpStatusCode';
import type { RecurringPaymentViewPagedCollection } from './RecurringPaymentViewPagedCollection';
export type RecurringPaymentViewPagedCollectionChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: RecurringPaymentViewPagedCollection;
    statusCode?: HttpStatusCode;
    errors?: any;
};
