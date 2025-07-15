export interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}
