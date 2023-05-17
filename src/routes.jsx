import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainProvider from "./contexts";

import Login from "./Pages/Login";
import Clientes from "./Pages/Clientes";
import AdCliente from "./Pages/AdCliente";
import Compras from "./Pages/Compras";
import Produtos from "./Pages/Produtos";

function RoutesApp() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/compras" element={<Compras />} />
          
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/adiciona-cliente" element={<AdCliente />} />

          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  )
}

export default RoutesApp;