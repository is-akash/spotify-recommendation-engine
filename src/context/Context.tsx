import { createContext, useState } from "react";
import { IContextType } from "../interfaces";

const INITIAL_STATE = {
    isLoading: false,
    setIsLoading: () => {},
};

export const AuthContext = createContext<IContextType>(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
