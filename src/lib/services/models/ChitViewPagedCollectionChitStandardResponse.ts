/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChitViewPagedCollection } from './ChitViewPagedCollection';
import type { HttpStatusCode } from './HttpStatusCode';
export type ChitViewPagedCollectionChitStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: ChitViewPagedCollection;
    statusCode?: HttpStatusCode;
    errors?: any;
};

