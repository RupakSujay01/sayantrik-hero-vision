/// <reference types="vite/client" />

interface Window {
    dataLayer: any[];
    gtag: (
        command: 'config' | 'set' | 'event' | 'js',
        targetId: string,
        config?: Record<string, any>
    ) => void;
}