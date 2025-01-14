/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Bank } from '../models/Bank';
import type { BankListChitStandardResponse } from '../models/BankListChitStandardResponse';
import type { BooleanChitStandardResponse } from '../models/BooleanChitStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UtilityService {
    /**
     * @returns BankListChitStandardResponse Success
     * @throws ApiError
     */
    public static getWalletApiUtilityGetBankList({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<BankListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Utility/getBankList',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static postWalletApiUtilityAddBankList({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: Array<Bank>,
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Utility/addBankList',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static getWalletApiUtilityGetMonoBanks({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Utility/getMonoBanks',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                403: `Forbidden`,
            },
        });
    }
}
