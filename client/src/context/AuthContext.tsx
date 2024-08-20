import React, { useContext, useEffect, useState } from "react";
import storage from "../utils/storage";
import { jwtDecode } from "jwt-decode";

interface IAuthContext {
  isLoggedIn: boolean;
  user: User | null;
  logout: () => void;
  setUserToken: (token: string) => void;
}

type User = {
  id: string;
  email?: string;
}

export const AuthContext = React.createContext<IAuthContext>({
  isLoggedIn: false,
  user: null,
  logout: () => {},
  setUserToken: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const token = storage.getToken();
  const isLoggedIn = Boolean(token);

  const logout = () => {
    setUser(null);
    storage.clearToken();
  };

  const setUserToken = (token: string) => {
    const decoded = jwtDecode(token);

    if (decoded.sub && decoded.exp) {
      if (Date.now() >= decoded.exp * 1000) {
        storage.clearToken();
        setUser(null);
        return;
      }
      return setUser({ id: decoded.sub });
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    if (token) {
      setUserToken(token);
    };
  }, [token]);

  return (
    <AuthContext.Provider value={{isLoggedIn, user, logout, setUserToken}}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth has to be used within <AuthContext.Provider>');
  }

  return authContext;
};
