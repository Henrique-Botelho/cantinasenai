import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import MainProvider from "./contexts";

import Login from "./Pages/Login";
import Error from "./Pages/Error";

import Clientes from "./Pages/Clientes";
import AdCliente from "./Pages/AdCliente";
import EdCliente from "./Pages/EdCliente";

import Produtos from "./Pages/Produtos";
import AdProduto from "./Pages/AdProduto";
import EdProduto from "./Pages/EdProduto";

import Compras from "./Pages/Compras";
import AdCompra from "./Pages/AdCompra";

function Private({Item}) {
  const logado = true;

  return logado ? <Item /> : <Navigate to="/" />;
}

function RoutesApp() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="*" element={<Error/>} />

          <Route path="/compras" element={<Private Item={Compras} />} />
          <Route path="/adiciona-compra" element={<Private Item={AdCompra} />} />
          
          <Route path="/clientes" element={<Private Item={Clientes} />} />
          <Route path="/adiciona-cliente" element={<Private Item={AdCliente} />} />
          <Route path="/edita-cliente" element={<Private Item={EdCliente} />} />

          <Route path="/produtos" element={<Private Item={Produtos} />} />
          <Route path="/adiciona-produto" element={<Private Item={AdProduto} />} />
          <Route path="/edita-produto" element={<Private Item={EdProduto} />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  )
}

export default RoutesApp;