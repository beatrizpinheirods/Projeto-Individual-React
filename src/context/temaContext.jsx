import { createContext, useState, useContext } from "react";

const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const alterarTema = () => setTemaEscuro(prev => !prev);

  return (
    <TemaContext.Provider value={{ temaEscuro, alterarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  return useContext(TemaContext);
}