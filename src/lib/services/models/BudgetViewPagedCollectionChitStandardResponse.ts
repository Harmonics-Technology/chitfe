/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetViewPagedCollection } from './BudgetViewPagedCollection';
import type { HttpStatusCode } from './HttpStatusCode';
export type BudgetViewPagedCollectionChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: BudgetViewPagedCollection;
    statusCode?: HttpStatusCode;
    errors?: any;
};
