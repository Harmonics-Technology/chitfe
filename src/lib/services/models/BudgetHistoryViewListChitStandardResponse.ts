/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetHistoryView } from './BudgetHistoryView';
import type { HttpStatusCode } from './HttpStatusCode';
export type BudgetHistoryViewListChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<BudgetHistoryView> | null;
    statusCode?: HttpStatusCode;
    errors?: any;
};

