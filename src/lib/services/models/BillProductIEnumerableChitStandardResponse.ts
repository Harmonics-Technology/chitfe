/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillProduct } from './BillProduct';
import type { HttpStatusCode } from './HttpStatusCode';
export type BillProductIEnumerableChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<BillProduct> | null;
    statusCode?: HttpStatusCode;
    errors?: any;
};
