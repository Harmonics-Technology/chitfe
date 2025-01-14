/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChitView } from './ChitView';
import type { HttpStatusCode } from './HttpStatusCode';
export type ChitViewChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ChitView;
    statusCode?: HttpStatusCode;
    errors?: any;
};

