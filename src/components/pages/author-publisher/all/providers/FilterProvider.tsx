"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface FilterContextProps {
  letter: string;
  setLetter: Dispatch<SetStateAction<string>>;
}

export const FilterContext = createContext<FilterContextProps>(
  {} as FilterContextProps
);

const FilterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [letter, setLetter] = useState<string>("A");

  return (
    <FilterContext.Provider value={{ letter, setLetter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
