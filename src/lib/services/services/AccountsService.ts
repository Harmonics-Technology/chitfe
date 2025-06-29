/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountViewListChitStandardResponse } from '../models/AccountViewListChitStandardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountsService {
    /**
     * @returns AccountViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static listUserAccounts({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<AccountViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Accounts/list',
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
