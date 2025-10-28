'use client';

import React, { useEffect } from 'react';
import { useAuthStore } from '@src/stores/authStore';
import { OpenAPI } from '@lib/services/core/OpenAPI';

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { token } = useAuthStore();

    useEffect(() => {
        // Initialize OpenAPI token from persisted auth state
        if (token) {
            OpenAPI.TOKEN = token;
        }
    }, [token]);

    return <>{children}</>;
}
