import React, { createContext, useState, useEffect } from "react";
import { IAuthContextType } from "../../config/type/ui-type/auth-type";
import { getToken } from "../../utilis/auth/authHelper";

// Define the shape of the authentication context
export const AuthContext = createContext<IAuthContextType>({
  isAuthenticated: false,
  loading: false,
  setIsAuthenticated: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  console.log("AuthProvider initialized");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();
      setIsAuthenticated(!!token);
      setLoading(false);
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
