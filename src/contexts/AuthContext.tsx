import React, { createContext, useCallback, useContext, useState } from "react";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
};

interface AuthState {
  user: User;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

type AuthContextType = {
  user: AuthState;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

type Props = {
  children?: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<AuthState>(() => {
    const token = localStorage.getItem("@AnatiQuanti:token");
    const user = localStorage.getItem("@AnatiQuanti:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/login", { email, password });
    const { token, user } = response.data;

    localStorage.setItem("@AnatiQuanti:token", token);
    localStorage.setItem("@AnatiQuanti:user", JSON.stringify(user));

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@AnatiQuanti:token");
    localStorage.removeItem("@AnatiQuanti:admin");

    setUser({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
