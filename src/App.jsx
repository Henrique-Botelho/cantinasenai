import React from "react";
import RoutesApp from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

// O arquivo de rotas é importado e carregado aqui

function App() {
  return (
    <>
      <ToastContainer autoClose={1500} />
      <RoutesApp />
    </>
  )
}

export default App;