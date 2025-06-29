/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HttpStatusCode } from './HttpStatusCode';
import type { UpcomingPaymentView } from './UpcomingPaymentView';
export type UpcomingPaymentViewListChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<UpcomingPaymentView> | null;
    statusCode?: HttpStatusCode;
    errors?: any;
};
