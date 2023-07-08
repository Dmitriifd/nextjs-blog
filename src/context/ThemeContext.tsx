"use client";

import { createContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  toggle: () => void;
  mode: string;
}

export const ThemeContext = createContext<ThemeContextType>({
  toggle: () => {},
  mode: 'dark',
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<string>('dark');

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};