import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Modal } from "@mui/material";

import imagemCantina from "../../assets/fundo.png";

import Header from "../../components/Header";

import comprasColumns from "./table";

function Compras() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const rows = [
    {
      id: 1,
      nome: "Henrique de Moraes Botelho da Silva",
      compra: "Pão de queijo",
      dataHora: "16/05/2023",
      total: 3,
    },
    {
      id: 2,
      nome: "Heitor",
      compra: "Café",
      dataHora: "20/03/2023",
      total: 2,
    },
  ];

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />

      <main className="container rounded bg-white flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-full px-5">
          <h1 className="text-black font-bold opacity-75 text-xl">Tabela de Compras</h1>
          <button className="my-8 bg-green-500 w-40 h-10 text-gray-100 rounded">Adicionar Compra</button>
        </div>
        <div className="container bg-white rounded h-96">
          <DataGrid rows={rows} columns={comprasColumns} />
        </div>
      </main>
    </div>
  );
}

export default Compras;
