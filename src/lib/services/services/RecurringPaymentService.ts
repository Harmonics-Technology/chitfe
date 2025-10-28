/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseMainViewListChitStandardResponse } from '../models/BaseMainViewListChitStandardResponse';
import type { BooleanChitStandardResponse } from '../models/BooleanChitStandardResponse';
import type { CreateBillRecurringPaymentModel } from '../models/CreateBillRecurringPaymentModel';
import type { CreateExternalRecurringPaymentModel } from '../models/CreateExternalRecurringPaymentModel';
import type { CreateInternalRecurringPaymentModel } from '../models/CreateInternalRecurringPaymentModel';
import type { CreateRecurringPaymentModel } from '../models/CreateRecurringPaymentModel';
import type { RecurringPaymentHistoryListChitStandardResponse } from '../models/RecurringPaymentHistoryListChitStandardResponse';
import type { RecurringPaymentStatus } from '../models/RecurringPaymentStatus';
import type { RecurringPaymentType } from '../models/RecurringPaymentType';
import type { RecurringPaymentViewChitStandardResponse } from '../models/RecurringPaymentViewChitStandardResponse';
import type { RecurringPaymentViewPagedCollectionChitStandardResponse } from '../models/RecurringPaymentViewPagedCollectionChitStandardResponse';
import type { UpcomingPaymentViewListChitStandardResponse } from '../models/UpcomingPaymentViewListChitStandardResponse';
import type { UpdateRecurringPaymentModel } from '../models/UpdateRecurringPaymentModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RecurringPaymentService {
    /**
     * @returns RecurringPaymentViewChitStandardResponse Success
     * @throws ApiError
     */
    public static createRecurringPayment({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: CreateRecurringPaymentModel;
    }): CancelablePromise<RecurringPaymentViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/RecurringPayment/create',
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
     * @returns any Success
     * @throws ApiError
     */
    public static postWalletApiRecurringPaymentInternal({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: CreateInternalRecurringPaymentModel;
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/RecurringPayment/internal',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postWalletApiRecurringPaymentExternal({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: CreateExternalRecurringPaymentModel;
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/RecurringPayment/external',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postWalletApiRecurringPaymentBill({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: CreateBillRecurringPaymentModel;
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/RecurringPayment/bill',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns RecurringPaymentViewPagedCollectionChitStandardResponse Success
     * @throws ApiError
     */
    public static listRecurringPayments({
        offset,
        limit,
        status,
        paymentType,
        startDate,
        endDate,
        isMobile,
    }: {
        offset?: number;
        limit?: number;
        status?: RecurringPaymentStatus;
        paymentType?: RecurringPaymentType;
        startDate?: string;
        endDate?: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<RecurringPaymentViewPagedCollectionChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/RecurringPayment/list',
            headers: {
                IsMobile: isMobile,
            },
            query: {
                Offset: offset,
                Limit: limit,
                Status: status,
                PaymentType: paymentType,
                StartDate: startDate,
                EndDate: endDate,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns RecurringPaymentViewChitStandardResponse Success
     * @throws ApiError
     */
    public static getRecurringPayment({
        paymentId,
        isMobile,
    }: {
        paymentId: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<RecurringPaymentViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/RecurringPayment/{paymentId}',
            path: {
                paymentId: paymentId,
            },
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static updateRecurringPayment({
        paymentId,
        isMobile,
        requestBody,
    }: {
        paymentId: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: UpdateRecurringPaymentModel;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/wallet/api/RecurringPayment/{paymentId}',
            path: {
                paymentId: paymentId,
            },
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static pauseRecurringPayment({
        paymentId,
        isMobile,
    }: {
        paymentId: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/RecurringPayment/{paymentId}/pause',
            path: {
                paymentId: paymentId,
            },
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static resumeRecurringPayment({
        paymentId,
        isMobile,
    }: {
        paymentId: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/RecurringPayment/{paymentId}/resume',
            path: {
                paymentId: paymentId,
            },
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static cancelRecurringPayment({
        paymentId,
        isMobile,
    }: {
        paymentId: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/RecurringPayment/{paymentId}/cancel',
            path: {
                paymentId: paymentId,
            },
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static processPaymentNow({
        paymentId,
        isMobile,
    }: {
        paymentId: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/RecurringPayment/{paymentId}/process',
            path: {
                paymentId: paymentId,
            },
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns RecurringPaymentHistoryListChitStandardResponse Success
     * @throws ApiError
     */
    public static getPaymentHistory({
        paymentId,
        startDate,
        endDate,
        isMobile,
    }: {
        paymentId: string;
        startDate?: string;
        endDate?: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<RecurringPaymentHistoryListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/RecurringPayment/{paymentId}/history',
            path: {
                paymentId: paymentId,
            },
            headers: {
                IsMobile: isMobile,
            },
            query: {
                startDate: startDate,
                endDate: endDate,
            },
            errors: {
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns UpcomingPaymentViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static getUpcomingPayments({
        endDate,
        isMobile,
    }: {
        endDate?: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<UpcomingPaymentViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/RecurringPayment/upcoming',
            headers: {
                IsMobile: isMobile,
            },
            query: {
                endDate: endDate,
            },
            errors: {
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BaseMainViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static recurringPayemntStatuses({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<BaseMainViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/RecurringPayment/statuses/list',
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BaseMainViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static listRecurringPaymentTypes({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<BaseMainViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/RecurringPayment/types/list',
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getWalletApiRecurringPaymentStatuses({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/RecurringPayment/statuses',
            headers: {
                IsMobile: isMobile,
            },
        });
    }
}
