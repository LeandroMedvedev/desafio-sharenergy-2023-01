import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { SignInCredentials } from '../interfaces/User';
import { api } from '../services/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthState {
  token: string;
  user: string;
}

interface AuthContextData extends AuthState {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Sharenergy:token');
    const user = localStorage.getItem('@Sharenergy:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ username, password }: SignInCredentials) => {
      const response = await api.post('/users/signIn', { username, password });
      const { token, user } = response.data;

      localStorage.setItem('@Sharenergy:token', token);
      localStorage.setItem('@Sharenergy:user', JSON.stringify(user));

      setData({ token, user } as AuthState);
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Sharenergy:token');
    localStorage.removeItem('@Sharenergy:user');
    localStorage.clear();

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token: data.token, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
