import { useContext } from "react";
import { AuthContext } from "./Context";

export const useUserContext = () => useContext(AuthContext);
