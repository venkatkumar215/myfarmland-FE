export interface IAuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}
