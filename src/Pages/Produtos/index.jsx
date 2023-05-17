import React from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

import Header from "../../components/Header";
import produtosColumns from "./table";

function Produtos() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const rows = [
    {id: 1, nome: "Pão de queijo", preco: 3, categoria: "salgados", descricao: "Tamanho médio."}
  ]

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />
      <main className="container rounded bg-white flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-full px-5">
          <h1 className="text-black font-bold opacity-75 text-xl">Tabela de Produtos</h1>
          <Link to="/adiciona-produto" className="my-8 bg-green-500 w-40 h-10 text-gray-100 rounded flex justify-center items-center">Adicionar Produto</Link>
        </div>
        <div className="container bg-white rounded h-96">
          <DataGrid
            columns={produtosColumns}
            rows={rows}
          />
        </div>
      </main>
    </div>
  );
}

export default Produtos;