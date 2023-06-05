import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import MainProvider from "./contexts";
import { MainContext } from "./contexts";

import Login from "./Pages/Login";
import EsqueciSenha from "./Pages/EsqueciSenha";
import Error from "./Pages/Error";
import TrocarSenha from "./Pages/TrocarSenha";

import Clientes from "./Pages/Clientes";
import AdCliente from "./Pages/AdCliente";
import EdCliente from "./Pages/EdCliente";

import Produtos from "./Pages/Produtos";
import AdProduto from "./Pages/AdProduto";
import EdProduto from "./Pages/EdProduto";

import Compras from "./Pages/Compras";
import AdCompra from "./Pages/AdCompra";
import FinalizarConta from "./Pages/FinalizarConta";

import Manual from "./Pages/Manual";

function Private({ Item }) {
  const { autenticado } = useContext(MainContext);

  return autenticado ? <Item /> : <Navigate to="/" />;
}

function RoutesApp() {
  return (
    <BrowserRouter>
      <MainProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />
          <Route path="/trocar-senha" element={<TrocarSenha />} />

          <Route path="/compras" element={<Private Item={Compras} />} />
          <Route
            path="/adiciona-compra"
            element={<Private Item={AdCompra} />}
          />
          <Route
            path="/finalizar-conta"
            element={<Private Item={FinalizarConta} />}
          />

          <Route path="/clientes" element={<Private Item={Clientes} />} />
          <Route
            path="/adiciona-cliente"
            element={<Private Item={AdCliente} />}
          />
          <Route path="/edita-cliente" element={<Private Item={EdCliente} />} />

          <Route path="/produtos" element={<Private Item={Produtos} />} />
          <Route
            path="/adiciona-produto"
            element={<Private Item={AdProduto} />}
          />
          <Route path="/edita-produto" element={<Private Item={EdProduto} />} />

          <Route path="/manual" element={<Private Item={Manual} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </MainProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
