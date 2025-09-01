import React, { createContext, useState, useEffect } from "react";
import { IAuthContextType } from "../../config/type/uiType/authType";
import { getToken } from "../../utilis/auth/authHelper";

// Define the shape of the authentication context
export const AuthContext = createContext<IAuthContextType>({
  isAuthenticated: false,
  loading: false,
  userToken: "",
  userId: "",
  setIsAuthenticated: () => {},
  setUserId: () => {},
  setUserToken: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  console.log("AuthProvider initialized");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  // temporary set uer Id and token

  const [userToken, setuserToken] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      // temporary commented
      // const token = await getToken();
      console.log("checkAuth initialized", userToken);
      const token = userToken;
      setIsAuthenticated(!!token);
      setLoading(false);
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        userId,
        userToken,
        setUserId: setUserId,
        setUserToken: setuserToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
