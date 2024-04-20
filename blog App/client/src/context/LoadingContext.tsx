import React, { createContext, useContext, useState } from 'react';

interface LoadingContextType {
    loading: boolean;
    setLoading: (isLoading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
    loading: false,
    setLoading: () => {},
});

 const LoadingProvider = ({ children }:{ children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingProvider;
export const useLoadingContext = () => useContext(LoadingContext);
