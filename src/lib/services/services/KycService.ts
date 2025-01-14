/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanChitStandardResponse } from '../models/BooleanChitStandardResponse';
import type { IdTypesListChitStandardResponse } from '../models/IdTypesListChitStandardResponse';
import type { InitiateBasicKycPayload } from '../models/InitiateBasicKycPayload';
import type { SmileIdVerificationResponse } from '../models/SmileIdVerificationResponse';
import type { UserKycStatusViewChitStandardResponse } from '../models/UserKycStatusViewChitStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KycService {
    /**
     * @returns BooleanChitStandardResponse OK
     * @throws ApiError
     */
    public static initiateBasicKyc({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: InitiateBasicKycPayload,
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Kyc/basic',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @returns IdTypesListChitStandardResponse OK
     * @throws ApiError
     */
    public static getIdTypes({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<IdTypesListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/api/Kyc/id-types',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static processSmileIdCallback({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: SmileIdVerificationResponse,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Kyc/smile-id-callback',
            headers: {
                'IsMobile': isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @returns UserKycStatusViewChitStandardResponse OK
     * @throws ApiError
     */
    public static getUserKycStatus({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<UserKycStatusViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/api/Kyc/kyc-status',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
