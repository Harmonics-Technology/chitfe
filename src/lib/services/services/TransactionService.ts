/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountViewListChitStandardResponse } from '../models/AccountViewListChitStandardResponse';
import type { ExternalTransferModel } from '../models/ExternalTransferModel';
import type { InternalTransferModel } from '../models/InternalTransferModel';
import type { TransactionViewPagedCollectionChitStandardResponse } from '../models/TransactionViewPagedCollectionChitStandardResponse';
import type { TransferRecipientViewChitStandardResponse } from '../models/TransferRecipientViewChitStandardResponse';
import type { TransferResponseChitStandardResponse } from '../models/TransferResponseChitStandardResponse';
import type { ValidateAccountModel } from '../models/ValidateAccountModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TransactionService {
    /**
     * @returns TransferResponseChitStandardResponse Success
     * @throws ApiError
     */
    public static initiateInternalTransfer({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: InternalTransferModel;
    }): CancelablePromise<TransferResponseChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Transaction/transfer/internal',
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
     * @returns TransferRecipientViewChitStandardResponse Success
     * @throws ApiError
     */
    public static validateAccountBeforeInitiateTransfer({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: ValidateAccountModel;
    }): CancelablePromise<TransferRecipientViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Transaction/transfer/validate/account',
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
     * @returns TransferRecipientViewChitStandardResponse Success
     * @throws ApiError
     */
    public static resolveInternalTransferIdentifier({
        identifier,
        isMobile,
    }: {
        identifier: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<TransferRecipientViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Transaction/transfer/validate/{identifier}',
            path: {
                identifier: identifier,
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
     * @returns TransferResponseChitStandardResponse Success
     * @throws ApiError
     */
    public static initiateExternalTransfer({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
        requestBody?: ExternalTransferModel;
    }): CancelablePromise<TransferResponseChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Transaction/transfer/external',
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
    public static listUserTransactions({
        offset,
        limit,
        transactionTypeId,
        transactionStatusId,
        transactionReference,
        startDate,
        endDate,
        budgetCategoryId,
        walletId,
        linkedAccountId,
        accountType,
        isMobile,
    }: {
        offset?: number;
        limit?: number;
        transactionTypeId?: number;
        transactionStatusId?: number;
        transactionReference?: string;
        startDate?: string;
        endDate?: string;
        budgetCategoryId?: string;
        walletId?: string;
        linkedAccountId?: string;
        accountType?: string;
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<TransactionViewPagedCollectionChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Transaction/user/transactions',
            headers: {
                IsMobile: isMobile,
            },
            query: {
                Offset: offset,
                Limit: limit,
                TransactionTypeId: transactionTypeId,
                TransactionStatusId: transactionStatusId,
                TransactionReference: transactionReference,
                StartDate: startDate,
                EndDate: endDate,
                BudgetCategoryId: budgetCategoryId,
                WalletId: walletId,
                LinkedAccountId: linkedAccountId,
                AccountType: accountType,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns AccountViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static getUserAccounts({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any;
    }): CancelablePromise<AccountViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Transaction/user/accounts',
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
