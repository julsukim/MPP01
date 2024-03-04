import React, { createContext, useContext, useState, FC, ReactNode } from 'react';

// 사용자 인증 정보의 타입을 정의합니다.
interface AuthContextType {
  isLoggedIn: boolean;
  login: (name:string) => void;
  logout: () => void;
  username: string|null;
}

// createContext를 사용하여 새로운 context를 생성합니다.
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider 컴포넌트를 생성하여 상태를 관리합니다.
export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string|null>(null);

  const login = (name:string) => {
    setIsLoggedIn(true);
    setUsername(name);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};

// useContext를 사용하여 컴포넌트에서 AuthContext에 접근할 수 있습니다.
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
