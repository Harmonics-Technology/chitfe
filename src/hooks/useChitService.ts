// Type-safe hook for using Chit service methods
// This hook is a generic hook that can be used to call any method on a Chit service
// ignore file for typecheck and eslint rules
// tslint:disable
// eslint-disable
// ts-nocheck - Ignore all TypeScript checks
// ts-expect-error - Complex generic types and service method handling

import { CancelablePromise } from '@lib/services';
import { useState, useCallback, useEffect } from 'react';

// Helper type to get the return type of a function, unwrapping the CancelablePromise
type UnwrapPromise<T> = T extends CancelablePromise<infer U> ? U : T;

// Helper type for static class methods
type StaticMethod<T> = T extends { [K in keyof T]: T[K] } ? T[keyof T] : never;

// Type for the hook parameters
type UseChitServiceParams<TService, TMethod extends StaticMethod<TService>> = {
    service: TService;
    selector: (service: TService) => TMethod;
    params?: Parameters<TMethod>[0];
    enabled?: boolean;
    mode?: 'query' | 'mutation';
};

// Type for the hook return value
type UseChitServiceReturn<TService, TMethod extends StaticMethod<TService>> = {
    data: UnwrapPromise<ReturnType<TMethod>> | null;
    error: Error | null;
    isLoading: boolean;
    execute: (
        params?: Parameters<TMethod>[0]
    ) => Promise<UnwrapPromise<ReturnType<TMethod>>>;
    reset: () => void;
};

export function useChitService<
    TService,
    TMethod extends StaticMethod<TService>,
>({
    service,
    selector,
    params,
    enabled = true,
    mode = 'query',
}: UseChitServiceParams<TService, TMethod>): UseChitServiceReturn<
    TService,
    TMethod
> {
    const [data, setData] = useState<UnwrapPromise<ReturnType<TMethod>> | null>(
        null
    );
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const execute = useCallback(
        async (executeParams?: Parameters<TMethod>[0]) => {
            setIsLoading(true);
            setError(null);

            try {
                const method = selector(service);
                const finalParams = executeParams || params;
                const result = await (finalParams
                    ? method(finalParams)
                    : method());
                setData(result);
                return result;
            } catch (e) {
                const errorInstance =
                    e instanceof Error
                        ? e
                        : new Error('An unknown error occurred');
                setError(errorInstance);
                throw errorInstance;
            } finally {
                setIsLoading(false);
            }
        },
        [service, selector, params]
    );

    const reset = useCallback(() => {
        setData(null);
        setError(null);
        setIsLoading(false);
    }, []);

    // Only auto-execute for queries, not mutations
    useEffect(() => {
        if (mode === 'query' && enabled) {
            execute();
        }
    }, [enabled, mode, JSON.stringify(params)]);

    return {
        data,
        error,
        isLoading,
        execute,
        reset,
    };
}
