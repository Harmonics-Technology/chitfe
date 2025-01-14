/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRequestModel } from '../models/CreateRequestModel';
import type { RequestResponseModel } from '../models/RequestResponseModel';
import type { RequestStatisticsChitStandardResponse } from '../models/RequestStatisticsChitStandardResponse';
import type { RequestStatusEnum } from '../models/RequestStatusEnum';
import type { RequestSummaryChitStandardResponse } from '../models/RequestSummaryChitStandardResponse';
import type { RequestViewChitStandardResponse } from '../models/RequestViewChitStandardResponse';
import type { RequestViewPagedCollectionChitStandardResponse } from '../models/RequestViewPagedCollectionChitStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RequestService {
    /**
     * @returns RequestViewChitStandardResponse Success
     * @throws ApiError
     */
    public static createRequest({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: CreateRequestModel,
    }): CancelablePromise<RequestViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Request/create',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns RequestViewPagedCollectionChitStandardResponse Success
     * @throws ApiError
     */
    public static getUserRequests({
        offset,
        limit,
        sent,
        status,
        isMobile,
    }: {
        offset?: number,
        limit?: number,
        sent?: boolean,
        status?: RequestStatusEnum,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<RequestViewPagedCollectionChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Request/list',
            headers: {
                'IsMobile': isMobile,
            },
            query: {
                'Offset': offset,
                'Limit': limit,
                'sent': sent,
                'status': status,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns RequestViewChitStandardResponse Success
     * @throws ApiError
     */
    public static getRequest({
        requestId,
        isMobile,
    }: {
        requestId: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<RequestViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Request/{requestId}',
            path: {
                'requestId': requestId,
            },
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns RequestViewChitStandardResponse Success
     * @throws ApiError
     */
    public static approveRequest({
        requestId,
        isMobile,
        requestBody,
    }: {
        requestId: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: RequestResponseModel,
    }): CancelablePromise<RequestViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Request/{requestId}/approve',
            path: {
                'requestId': requestId,
            },
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns RequestViewChitStandardResponse Success
     * @throws ApiError
     */
    public static declineRequest({
        requestId,
        isMobile,
        requestBody,
    }: {
        requestId: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: RequestResponseModel,
    }): CancelablePromise<RequestViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Request/{requestId}/decline',
            path: {
                'requestId': requestId,
            },
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns RequestViewChitStandardResponse Success
     * @throws ApiError
     */
    public static cancelRequest({
        requestId,
        isMobile,
    }: {
        requestId: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<RequestViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Request/{requestId}/cancel',
            path: {
                'requestId': requestId,
            },
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns RequestStatisticsChitStandardResponse Success
     * @throws ApiError
     */
    public static getRequestStatistics({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<RequestStatisticsChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Request/statistics',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns RequestSummaryChitStandardResponse Success
     * @throws ApiError
     */
    public static getRequestSummary({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<RequestSummaryChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Request/summary',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
}
