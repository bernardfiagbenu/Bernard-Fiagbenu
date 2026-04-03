'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user] = useState<User | null>(null);
  const [loading] = useState(false);

  const logout = async () => {
    // No-op: authentication has been removed
  };

  return (
    <UserContext.Provider value={{ user, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};