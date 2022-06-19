import { createContext, ReactNode, useState, useEffect, useReducer } from 'react';
import { User } from 'firebase/auth';
import { userContextType } from '../types';
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';
// as the actual value you want to access
export const UserContext = createContext<userContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currUser, setCurrUser] = useState<User | null>(null);
  const value = { currUser, setCurrUser };

  useEffect(() => {
    const unsub = onAuthStateChangedListener((user) => {
      console.log(user);
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrUser(user);
    });
    return unsub;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
