"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface AuthorContextProps {
  letter: string;
  setLetter: Dispatch<SetStateAction<string>>;
}

export const AuthorContext = createContext<AuthorContextProps>(
  {} as AuthorContextProps
);

const AuthorProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [letter, setLetter] = useState<string>("A");

  return (
    <AuthorContext.Provider value={{ letter, setLetter }}>
      {children}
    </AuthorContext.Provider>
  );
};

export default AuthorProvider;
