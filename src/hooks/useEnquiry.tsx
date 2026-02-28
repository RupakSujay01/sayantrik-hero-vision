import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EnquiryContextType {
    isEnquiryOpen: boolean;
    requestedClientType: string | undefined;
    openEnquiry: (clientType?: string) => void;
    closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export const EnquiryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [requestedClientType, setRequestedClientType] = useState<string | undefined>(undefined);

    const openEnquiry = (clientType?: string) => {
        setRequestedClientType(clientType);
        setIsEnquiryOpen(true);
    };

    const closeEnquiry = () => {
        setIsEnquiryOpen(false);
        setRequestedClientType(undefined);
    };

    return (
        <EnquiryContext.Provider value={{ isEnquiryOpen, requestedClientType, openEnquiry, closeEnquiry }}>
            {children}
        </EnquiryContext.Provider>
    );
};

export const useEnquiry = () => {
    const context = useContext(EnquiryContext);
    if (context === undefined) {
        throw new Error('useEnquiry must be used within an EnquiryProvider');
    }
    return context;
};
