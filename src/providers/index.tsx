'use client';

import React from 'react';
import { CSPostHogProvider } from './PostHugProvider';
import { SignalRProvider } from './SignalRProvider';
import { OpenAPI } from '@lib/services';

OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASEURL || '';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CSPostHogProvider>
            <SignalRProvider>{children}</SignalRProvider>
        </CSPostHogProvider>
    );
}
