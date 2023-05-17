import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainProvider from "./contexts";

import Login from "./Pages/Login";

import Clientes from "./Pages/Clientes";
import AdCliente from "./Pages/AdCliente";
import EdCliente from "./Pages/EdCliente";

import Produtos from "./Pages/Produtos";
import AdProduto from "./Pages/AdProduto";
import EdProduto from "./Pages/EdProduto";

import Compras from "./Pages/Compras";

function RoutesApp() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/compras" element={<Compras />} />
          
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/adiciona-cliente" element={<AdCliente />} />
          <Route path="/edita-cliente" element={<EdCliente />} />

          <Route path="/produtos" element={<Produtos />} />
          <Route path="/adiciona-produto" element={<AdProduto />} />
          <Route path="/edita-produto" element={<EdProduto />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  )
}

export default RoutesApp;