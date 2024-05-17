import { createContext } from "react";

const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  return (
    <SearchContext.Provider value={{ searchString: "" }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
