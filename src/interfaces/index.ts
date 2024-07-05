export interface IContextType {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SpotifyApiResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}
