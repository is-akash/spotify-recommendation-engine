import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
    const { isAuthenticated } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [navigate, isAuthenticated]);

    return children;
};

export default ProtectedLayout;
