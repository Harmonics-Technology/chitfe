/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetSpendingView } from './BudgetSpendingView';
import type { HttpStatusCode } from './HttpStatusCode';
export type BudgetSpendingViewChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: BudgetSpendingView;
    statusCode?: HttpStatusCode;
    errors?: any;
};

