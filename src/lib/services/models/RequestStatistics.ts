/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DailyRequestActivity } from './DailyRequestActivity';
export type RequestStatistics = {
    totalRequestsSent?: number;
    totalRequestsReceived?: number;
    pendingRequestsSent?: number;
    pendingRequestsReceived?: number;
    approvedRequests?: number;
    declinedRequests?: number;
    totalAmountRequested?: number;
    totalAmountReceived?: number;
    lastThirtyDaysActivity?: Array<DailyRequestActivity> | null;
};
