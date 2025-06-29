/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChitStatistics } from './ChitStatistics';
import type { HttpStatusCode } from './HttpStatusCode';
export type ChitStatisticsChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ChitStatistics;
    statusCode?: HttpStatusCode;
    errors?: any;
};
