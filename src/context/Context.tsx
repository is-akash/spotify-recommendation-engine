import { createContext, useEffect, useState } from "react";
import { IContextType } from "../interfaces";
import { INITIAL_STATE } from "../constants/constants";

export const AuthContext = createContext<IContextType>(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsAuthenticated(isAuthenticated);
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                setIsLoading,
                isAuthenticated,
                setIsAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
