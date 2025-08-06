/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanChitStandardResponse } from '../models/BooleanChitStandardResponse';
import type { ResetPinModel } from '../models/ResetPinModel';
import type { SecurityQuestionModel } from '../models/SecurityQuestionModel';
import type { SecurityQuestionValidationModel } from '../models/SecurityQuestionValidationModel';
import type { SecurityQuestionViewListChitStandardResponse } from '../models/SecurityQuestionViewListChitStandardResponse';
import type { TransactionPinValidationModel } from '../models/TransactionPinValidationModel';
import type { UpdatePinModel } from '../models/UpdatePinModel';
import type { UpdateSecurityQuestionsModel } from '../models/UpdateSecurityQuestionsModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SecurityService {
    /**
     * @returns SecurityQuestionViewListChitStandardResponse OK
     * @throws ApiError
     */
    public static getIdentityApiSecurityQuestions({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<SecurityQuestionViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity/api/Security/questions',
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse OK
     * @throws ApiError
     */
    public static putIdentityApiSecurityQuestionsUpdateAll({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: UpdateSecurityQuestionsModel;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/identity/api/Security/questions/update-all',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse OK
     * @throws ApiError
     */
    public static postIdentityApiSecurityQuestionsValidate({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: SecurityQuestionValidationModel;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Security/questions/validate',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse OK
     * @throws ApiError
     */
    public static postIdentityApiSecurityPinCreate({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: SecurityQuestionModel;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Security/pin/create',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse OK
     * @throws ApiError
     */
    public static putIdentityApiSecurityPinUpdate({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: UpdatePinModel;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/identity/api/Security/pin/update',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse OK
     * @throws ApiError
     */
    public static postIdentityApiSecurityPinValidate({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: TransactionPinValidationModel;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Security/pin/validate',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                429: `Too Many Requests`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse OK
     * @throws ApiError
     */
    public static postIdentityApiSecurityPinReset({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: ResetPinModel;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Security/pin/reset',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse OK
     * @throws ApiError
     */
    public static postIdentityApiSecurityRotateKeys({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/Security/rotate-keys',
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }
}
