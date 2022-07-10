import { createContext, ReactNode, useState, useEffect } from 'react';
import { StripeContextType } from '../types';

export const StripeContext = createContext<StripeContextType | null>(null);

export const StripeProvider = ({ children }: { children: ReactNode }) => {
  const [clientSecret, setClientSecret] = useState<string>('' as string);
  const value = { clientSecret, setClientSecret };

  return <StripeContext.Provider value={value}>{children}</StripeContext.Provider>;
};
