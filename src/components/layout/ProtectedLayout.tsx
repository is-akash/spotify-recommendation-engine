import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
    const access_token = useSelector(
        (state: RootState) => state.auth.access_token
    );
    const navigate = useNavigate();

    useEffect(() => {
        if (!access_token) {
            navigate("/");
        }
    }, [navigate, access_token]);

    return children;
};

export default ProtectedLayout;
