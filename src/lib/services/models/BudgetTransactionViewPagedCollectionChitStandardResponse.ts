/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetTransactionViewPagedCollection } from './BudgetTransactionViewPagedCollection';
import type { HttpStatusCode } from './HttpStatusCode';
export type BudgetTransactionViewPagedCollectionChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: BudgetTransactionViewPagedCollection;
    statusCode?: HttpStatusCode;
    errors?: any;
};

