/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountView } from './AccountView';
import type { HttpStatusCode } from './HttpStatusCode';
export type AccountViewListChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<AccountView> | null;
    statusCode?: HttpStatusCode;
    errors?: any;
};
