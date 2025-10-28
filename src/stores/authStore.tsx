import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserView, AccessTokenResponse } from '@lib/services';
import { OpenAPI } from '@lib/services/core/OpenAPI';

interface AuthState {
    user: UserView | null;
    token: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    onLogin: (tokenPayload: AccessTokenResponse, user: UserView) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            refreshToken: null,
            isAuthenticated: false,
            onLogin: (tokenPayload: AccessTokenResponse, user: UserView) => {
                // Set the token in the OpenAPI configuration
                OpenAPI.TOKEN = tokenPayload.accessToken || undefined;

                set({
                    user,
                    token: tokenPayload.accessToken,
                    refreshToken: tokenPayload.refreshToken,
                    isAuthenticated: true,
                });
            },
            logout: () => {
                // Clear the token from OpenAPI configuration
                OpenAPI.TOKEN = undefined;

                set({
                    user: null,
                    token: null,
                    refreshToken: null,
                    isAuthenticated: false,
                });
            },
        }),
        { name: 'auth-storage' }
    )
);

// example usage
// import { useAuthStore } from '~/stores/authStore';
// const { user, isAuthenticated, onLogin, logout } = useAuthStore();
