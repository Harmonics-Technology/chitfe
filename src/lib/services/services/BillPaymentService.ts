/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillCategoryIEnumerableChitStandardResponse } from '../models/BillCategoryIEnumerableChitStandardResponse';
import type { BillPaymentRequest } from '../models/BillPaymentRequest';
import type { BillPaymentResponseChitStandardResponse } from '../models/BillPaymentResponseChitStandardResponse';
import type { BillProductIEnumerableChitStandardResponse } from '../models/BillProductIEnumerableChitStandardResponse';
import type { BillValidationResponseChitStandardResponse } from '../models/BillValidationResponseChitStandardResponse';
import type { CustomerValidationRequest } from '../models/CustomerValidationRequest';
import type { RecentBillPaymentListChitStandardResponse } from '../models/RecentBillPaymentListChitStandardResponse';
import type { TransactionViewPagedCollectionChitStandardResponse } from '../models/TransactionViewPagedCollectionChitStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BillPaymentService {
    /**
     * @returns BillCategoryIEnumerableChitStandardResponse Success
     * @throws ApiError
     */
    public static getBillCategories({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<BillCategoryIEnumerableChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/BillPayment/categories',
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
     * @returns BillProductIEnumerableChitStandardResponse Success
     * @throws ApiError
     */
    public static getProductsByCategory({
        categoryId,
        isMobile,
    }: {
        categoryId: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<BillProductIEnumerableChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/BillPayment/categories/{categoryId}/products',
            path: {
                categoryId: categoryId,
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
     * @returns BillValidationResponseChitStandardResponse Success
     * @throws ApiError
     */
    public static validateCustomer({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: CustomerValidationRequest;
    }): CancelablePromise<BillValidationResponseChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/BillPayment/validate',
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
     * @returns BillPaymentResponseChitStandardResponse Success
     * @throws ApiError
     */
    public static processPayment({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: BillPaymentRequest;
    }): CancelablePromise<BillPaymentResponseChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/BillPayment/pay',
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
     * @returns TransactionViewPagedCollectionChitStandardResponse Success
     * @throws ApiError
     */
    public static getWalletApiBillPaymentHistory({
        offset,
        limit,
        startDate,
        endDate,
        transactionStatusId,
        transactionReference,
        productId,
        categoryId,
        isMobile,
    }: {
        offset?: number;
        limit?: number;
        startDate?: string;
        endDate?: string;
        transactionStatusId?: number;
        transactionReference?: string;
        productId?: string;
        categoryId?: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<TransactionViewPagedCollectionChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/BillPayment/history',
            headers: {
                IsMobile: isMobile,
            },
            query: {
                Offset: offset,
                Limit: limit,
                StartDate: startDate,
                EndDate: endDate,
                TransactionStatusId: transactionStatusId,
                TransactionReference: transactionReference,
                ProductId: productId,
                CategoryId: categoryId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns RecentBillPaymentListChitStandardResponse Success
     * @throws ApiError
     */
    public static getWalletApiBillPaymentRecent({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<RecentBillPaymentListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/BillPayment/recent',
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                500: `Server Error`,
            },
        });
    }
}
