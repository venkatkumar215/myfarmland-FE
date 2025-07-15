import React, { createContext, useState, useEffect } from "react";
import { getToken } from "../../utilis/tokenStorage/tokenStorage";
import { AuthContextType } from "../../config/type/ui-type/auth-type";




// Define the shape of the authentication context
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: true,
  setIsAuthenticated: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

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
