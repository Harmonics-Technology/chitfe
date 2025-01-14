/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanChitStandardResponse } from '../models/BooleanChitStandardResponse';
import type { BudgetAnalyticsViewChitStandardResponse } from '../models/BudgetAnalyticsViewChitStandardResponse';
import type { BudgetCategoryModel } from '../models/BudgetCategoryModel';
import type { BudgetCategoryViewChitStandardResponse } from '../models/BudgetCategoryViewChitStandardResponse';
import type { BudgetCategoryViewListChitStandardResponse } from '../models/BudgetCategoryViewListChitStandardResponse';
import type { BudgetHistoryViewListChitStandardResponse } from '../models/BudgetHistoryViewListChitStandardResponse';
import type { BudgetModel } from '../models/BudgetModel';
import type { BudgetSpendingViewChitStandardResponse } from '../models/BudgetSpendingViewChitStandardResponse';
import type { BudgetTransactionViewPagedCollectionChitStandardResponse } from '../models/BudgetTransactionViewPagedCollectionChitStandardResponse';
import type { BudgetViewChitStandardResponse } from '../models/BudgetViewChitStandardResponse';
import type { BudgetViewListChitStandardResponse } from '../models/BudgetViewListChitStandardResponse';
import type { BudgetViewPagedCollectionChitStandardResponse } from '../models/BudgetViewPagedCollectionChitStandardResponse';
import type { DailyBudgetTipViewChitStandardResponse } from '../models/DailyBudgetTipViewChitStandardResponse';
import type { SpendingTrendViewListChitStandardResponse } from '../models/SpendingTrendViewListChitStandardResponse';
import type { TransactionCategoryModel } from '../models/TransactionCategoryModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BudgetService {
    /**
     * @returns DailyBudgetTipViewChitStandardResponse Success
     * @throws ApiError
     */
    public static getDailyBudgetTip({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<DailyBudgetTipViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Budget/daily-tip',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BudgetViewChitStandardResponse Success
     * @throws ApiError
     */
    public static createBudget({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: BudgetModel,
    }): CancelablePromise<BudgetViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Budget/create',
            headers: {
                'IsMobile': isMobile,
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
     * @returns BudgetCategoryViewChitStandardResponse Success
     * @throws ApiError
     */
    public static createBudgetCategory({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: BudgetCategoryModel,
    }): CancelablePromise<BudgetCategoryViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Budget/category/create',
            headers: {
                'IsMobile': isMobile,
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
     * @returns BudgetViewPagedCollectionChitStandardResponse Success
     * @throws ApiError
     */
    public static listUserBudgets({
        offset,
        limit,
        startDate,
        endDate,
        isMobile,
    }: {
        offset?: number,
        limit?: number,
        startDate?: string,
        endDate?: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<BudgetViewPagedCollectionChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Budget/user/budgets',
            headers: {
                'IsMobile': isMobile,
            },
            query: {
                'Offset': offset,
                'Limit': limit,
                'startDate': startDate,
                'endDate': endDate,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BudgetAnalyticsViewChitStandardResponse Success
     * @throws ApiError
     */
    public static getBudgetAnalytics({
        startDate,
        endDate,
        isMobile,
    }: {
        startDate?: string,
        endDate?: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<BudgetAnalyticsViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Budget/analytics',
            headers: {
                'IsMobile': isMobile,
            },
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BudgetCategoryViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static getPredefinedCategories({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<BudgetCategoryViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Budget/categories/predefined',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BudgetCategoryViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static getUserCategories({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<BudgetCategoryViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Budget/categories/user',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static categorizeTransaction({
        isMobile,
        requestBody,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
        requestBody?: TransactionCategoryModel,
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Budget/transaction/categorize',
            headers: {
                'IsMobile': isMobile,
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
     * @returns BudgetSpendingViewChitStandardResponse Success
     * @throws ApiError
     */
    public static getBudgetSpending({
        budgetId,
        isMobile,
    }: {
        budgetId: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<BudgetSpendingViewChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Budget/{budgetId}/spending',
            path: {
                'budgetId': budgetId,
            },
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns SpendingTrendViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static getBudgetSpendingTrends({
        budgetId,
        startDate,
        endDate,
        isMobile,
    }: {
        budgetId: string,
        startDate?: string,
        endDate?: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<SpendingTrendViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Budget/{budgetId}/trends',
            path: {
                'budgetId': budgetId,
            },
            headers: {
                'IsMobile': isMobile,
            },
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BudgetHistoryViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static getBudgetHistory({
        budgetId,
        year,
        month,
        isMobile,
    }: {
        budgetId: string,
        year?: number,
        month?: number,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<BudgetHistoryViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Budget/{budgetId}/history',
            path: {
                'budgetId': budgetId,
            },
            headers: {
                'IsMobile': isMobile,
            },
            query: {
                'year': year,
                'month': month,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BooleanChitStandardResponse Success
     * @throws ApiError
     */
    public static deactivateBudget({
        budgetId,
        isMobile,
    }: {
        budgetId: string,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<BooleanChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Budget/{budgetId}/deactivate',
            path: {
                'budgetId': budgetId,
            },
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BudgetTransactionViewPagedCollectionChitStandardResponse Success
     * @throws ApiError
     */
    public static getBudgetTransactions({
        budgetId,
        offset,
        limit,
        isMobile,
    }: {
        budgetId: string,
        offset?: number,
        limit?: number,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<BudgetTransactionViewPagedCollectionChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wallet/api/Budget/{budgetId}/transactions',
            path: {
                'budgetId': budgetId,
            },
            headers: {
                'IsMobile': isMobile,
            },
            query: {
                'Offset': offset,
                'Limit': limit,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BudgetCategoryViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static createPredefinedCategories({
        isMobile,
    }: {
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<BudgetCategoryViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Budget/admin/categories/predefined',
            headers: {
                'IsMobile': isMobile,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
    /**
     * @returns BudgetViewListChitStandardResponse Success
     * @throws ApiError
     */
    public static setupInitialUserBudgets({
        userId,
        monthlyIncome,
        isMobile,
    }: {
        userId: string,
        monthlyIncome?: number,
        /**
         * a flag to indicate if the request is coming from a mobile device
         */
        isMobile?: any,
    }): CancelablePromise<BudgetViewListChitStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wallet/api/Budget/users/{userId}/setup',
            path: {
                'userId': userId,
            },
            headers: {
                'IsMobile': isMobile,
            },
            query: {
                'monthlyIncome': monthlyIncome,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }
}
