/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BudgetCategoryView } from './BudgetCategoryView';
import type { HttpStatusCode } from './HttpStatusCode';
export type BudgetCategoryViewListChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<BudgetCategoryView> | null;
    statusCode?: HttpStatusCode;
    errors?: any;
};
