/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BiometricDeviceRegistrationModel } from '../models/BiometricDeviceRegistrationModel';
import type { BiometricLoginModel } from '../models/BiometricLoginModel';
import type { UserViewChitStandardResponse } from '../models/UserViewChitStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BiometricIdentityService {
    /**
     * @returns UserViewChitStandardResponse OK
     * @throws ApiError
     */
    public static registerBiometricDevice({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: BiometricDeviceRegistrationModel;
    }): CancelablePromise<UserViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/BiometricIdentity/register',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @returns UserViewChitStandardResponse OK
     * @throws ApiError
     */
    public static authenticateBiometricDevice({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: BiometricLoginModel;
    }): CancelablePromise<UserViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/identity/api/BiometricIdentity/authenticate',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
