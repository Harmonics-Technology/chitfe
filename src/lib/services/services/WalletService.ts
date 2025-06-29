/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanChitStandardResponse } from '../models/BooleanChitStandardResponse';
import type { FundWalletModel } from '../models/FundWalletModel';
import type { MandateResponseChitStandardResponse } from '../models/MandateResponseChitStandardResponse';
import type { OtpDestinationsChitStandardResponse } from '../models/OtpDestinationsChitStandardResponse';
import type { SetMandateVerificationModel } from '../models/SetMandateVerificationModel';
import type { StringChitStandardResponse } from '../models/StringChitStandardResponse';
import type { VerifyMandateOtpModel } from '../models/VerifyMandateOtpModel';
import type { WalletViewChitStandardResponse } from '../models/WalletViewChitStandardResponse';
import type { WalletViewListChitStandardResponse } from '../models/WalletViewListChitStandardResponse';
import type { WebhookModel } from '../models/WebhookModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WalletService {
    /**
     * @returns WalletViewChitStandardResponse Success
     * @throws ApiError
     */
    public static nameMyWallet({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<WalletViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Wallet/name',
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns WalletViewChitStandardResponse Success
     * @throws ApiError
     */
    public static getWallet({
        walletId,
        isMobile,
    }: {
        walletId: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<WalletViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Wallet/{walletId}',
            path: {
                walletId: walletId,
            },
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns WalletViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static getWallets({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<WalletViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Wallet/all',
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns StringChitStandardResponse Success
     * @throws ApiError
     */
    public static fundWallet({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: FundWalletModel;
    }): CancelablePromise<StringChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Wallet/dev/fund',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static fundWalletCallback({
        reference,
        isMobile,
    }: {
        reference?: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Wallet/dev/fund/callback',
            headers: {
                IsMobile: isMobile,
            },
            query: {
                reference: reference,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static payStackChargeWebhook({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: WebhookModel;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Wallet/paystack/charge',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns StringChitStandardResponse Success
     * @throws ApiError
     */
    public static initiateAccountLinking({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<StringChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Wallet/account/linking/initiate',
            headers: {
                IsMobile: isMobile,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns OtpDestinationsChitStandardResponse Success
     * @throws ApiError
     */
    public static createDirectDebitMandate({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: string;
    }): CancelablePromise<OtpDestinationsChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Wallet/directDebit/mandate/create',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static initiateVerifyDirectDebitMandate({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: SetMandateVerificationModel;
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Wallet/directDebit/mandate/verify/initiate',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @returns MandateResponseChitStandardResponse Success
     * @throws ApiError
     */
    public static verifyDirectDebitMandate({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: VerifyMandateOtpModel;
    }): CancelablePromise<MandateResponseChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Wallet/directDebit/mandate/verify/complete',
            headers: {
                IsMobile: isMobile,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
