/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetView } from './BudgetView';
import type { HttpStatusCode } from './HttpStatusCode';
export type BudgetViewChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: BudgetView;
    statusCode?: HttpStatusCode;
    errors?: any;
};

