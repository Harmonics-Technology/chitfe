/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChitStatisticsChitStandardResponse } from '../models/ChitStatisticsChitStandardResponse';
import type { ChitStatuses } from '../models/ChitStatuses';
import type { ChitTypeViewListChitStandardResponse } from '../models/ChitTypeViewListChitStandardResponse';
import type { ChitViewChitStandardResponse } from '../models/ChitViewChitStandardResponse';
import type { ChitViewPagedCollectionChitStandardResponse } from '../models/ChitViewPagedCollectionChitStandardResponse';
import type { ClaimChitModel } from '../models/ClaimChitModel';
import type { GenerateChitModel } from '../models/GenerateChitModel';
import type { SendChitModel } from '../models/SendChitModel';
import type { SendChitViewChitStandardResponse } from '../models/SendChitViewChitStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChitService {
    /**
     * @returns ChitViewChitStandardResponse Success
     * @throws ApiError
     */
    public static generateChit({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: GenerateChitModel;
    }): CancelablePromise<ChitViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Chit/generate',
            headers: {
                IsMobile: isMobile,
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
     * @returns SendChitViewChitStandardResponse Success
     * @throws ApiError
     */
    public static sendChit({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: SendChitModel;
    }): CancelablePromise<SendChitViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Chit/send',
            headers: {
                IsMobile: isMobile,
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
     * @returns ChitViewChitStandardResponse Success
     * @throws ApiError
     */
    public static claimChit({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: ClaimChitModel;
    }): CancelablePromise<ChitViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Chit/claim',
            headers: {
                IsMobile: isMobile,
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
     * @returns ChitViewChitStandardResponse Success
     * @throws ApiError
     */
    public static validateChit({
        shortCode,
        isMobile,
    }: {
        shortCode: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<ChitViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Chit/validate/{shortCode}',
            path: {
                shortCode: shortCode,
            },
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns ChitViewPagedCollectionChitStandardResponse Success
     * @throws ApiError
     */
    public static listUserChits({
        created,
        status,
        startDate,
        endDate,
        minAmount,
        maxAmount,
        offset,
        limit,
        isMobile,
    }: {
        created?: boolean;
        status?: ChitStatuses;
        startDate?: string;
        endDate?: string;
        minAmount?: number;
        maxAmount?: number;
        offset?: number;
        limit?: number;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<ChitViewPagedCollectionChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Chit/list',
            headers: {
                IsMobile: isMobile,
            },
            query: {
                Created: created,
                Status: status,
                StartDate: startDate,
                EndDate: endDate,
                MinAmount: minAmount,
                MaxAmount: maxAmount,
                Offset: offset,
                Limit: limit,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns ChitViewChitStandardResponse Success
     * @throws ApiError
     */
    public static getChit({
        reference,
        isMobile,
    }: {
        reference: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<ChitViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Chit/{reference}',
            path: {
                reference: reference,
            },
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns ChitTypeViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static listChitTypes({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<ChitTypeViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Chit/types',
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns ChitStatisticsChitStandardResponse Success
     * @throws ApiError
     */
    public static getChitStatistics({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<ChitStatisticsChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Chit/statistics',
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
}
