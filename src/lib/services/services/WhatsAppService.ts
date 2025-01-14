/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanChitStandardResponse } from '../models/BooleanChitStandardResponse';
import type { IncomingDataModel } from '../models/IncomingDataModel';
import type { StringChitStandardResponse } from '../models/StringChitStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WhatsAppService {
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postWalletApiWhatsAppSend({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/WhatsApp/send',
            headers: {
                'IsMobile': isMobile,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static receiveWhatsAppMessage({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: IncomingDataModel,
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/WhatsApp/receive',
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
     * @returns string Success
     * @throws ApiError
     */
    public static getWalletApiWhatsAppReceive({
        hubMode,
        hubChallenge,
        hubVerifyToken,
        isMobile,
    }: {
        hubMode?: string,
        hubChallenge?: number,
        hubVerifyToken?: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/WhatsApp/receive',
            headers: {
                'IsMobile': isMobile,
            },
            query: {
                'hub.mode': hubMode,
                'hub.challenge': hubChallenge,
                'hub.verify_token': hubVerifyToken,
            },
        });
    }
    /**
     * @returns StringChitStandardResponse Success
     * @throws ApiError
     */
    public static whoAmI({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: string,
    }): CancelablePromise<StringChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/WhatsApp/chat/test/openai/whoami',
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
     * @returns StringChitStandardResponse Success
     * @throws ApiError
     */
    public static testConversation({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: string,
    }): CancelablePromise<StringChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/WhatsApp/chat/test/converse',
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
}
