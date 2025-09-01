export interface IAuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  userToken: string;
  userId: string;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUserId: (userId: string) => void;
  setUserToken: (userToken: string) => void;
}
