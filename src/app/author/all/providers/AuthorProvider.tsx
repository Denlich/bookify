"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface AuthorContextProps {
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
}

export const AuthorContext = createContext<AuthorContextProps>(
  {} as AuthorContextProps
);

const AuthorProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isActive, setIsActive] = useState<string>("A");

  return (
    <AuthorContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </AuthorContext.Provider>
  );
};

export default AuthorProvider;
