import React, { createContext } from "react";

// Criação do contexto
export const MainContext = createContext({});

// Importação do conjunto de funções de cada rota
import authFunctions from "./auth";
import produtosFunctions from "./produtos";
import comprasFunctions from "./compras";
import clientesFunctions from "./clientes";

// Criação do provedor do contexto
function MainProvider({ children }) {
  return (
    <MainContext.Provider value={{authFunctions, produtosFunctions, comprasFunctions, clientesFunctions}}>
      {children}
    </MainContext.Provider>
  )
}

export default MainProvider;