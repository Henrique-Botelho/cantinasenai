import React, { useState, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";

import imagemCantina from "../../assets/fundo.png";

import Header from "../../components/Header";


function AdCompra() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const [itens, setItens] = useState([]);

  const produtosColumns = [
    {
      field: "nome",
      headerName: "Nome",
      flex: 0.33,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "preco",
      headerName: "Preço",
      type: "number",
      flex: 0.33,
      valueFormatter: (params) => `R$ ${params.value.toFixed(2).replace('.', ',')}`,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      flex: 0.33,
      renderCell: (params) => (
        <button onClick={() => adicionaProduto(params.row)} className="bg-green-500 rounded p-2 text-gray-100">Adicionar</button>
      ),
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    }
  ]

  const compraColumns = [
    {
      field: "nome",
      headerName: "Nome",
      flex: 0.2,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "preco",
      headerName: "Preço",
      type: "number",
      flex: 0.2,
      valueFormatter: (params) => `R$ ${params.value.toFixed(2).replace('.', ',')}`,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "quantidade",
      headerName: "Quantidade",
      type: "number",
      flex: 0.2,
      editable: true,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      flex: 0.2,
      renderCell: (params) => (
        <button onClick={() => removeProduto(params.row)} className="bg-red-500 rounded p-2 text-gray-100">Remover</button>
      ),
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    }
  ]

  const adicionaProduto = (linha) => {
    // {id: 1, nome: "Queijo", preco: 3, quantidade: 0}
    const novosItens = [...itens];
    let adicionado = false;
    novosItens.map(produto => {
      if (produto.id == linha.id) {
        adicionado = true;
      }
    });
    if (adicionado === true) {
      return false;
    }
    novosItens.push({id: 1, nome: "Queijo", preco: 3, quantidade: 0});
    setItens(novosItens);
  }

  const removeProduto = (linha) => {
    console.log(itens);

  }

  const rows = [
    {id: 1, nome: "Pão de queijo", preco: 3}
  ]

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />

      <main className="container h-4/5 rounded bg-white flex flex-col justify-center items-center p-10">
        <div className="flex justify-start items-center w-full">
          <Link to="/compras" className="flex justify-center items-center mr-3"><BiArrowBack size={24} /></Link>
          <h2 className="my-4 text-xl">Nova Compra</h2>
        </div>
        <div className="flex w-full">
          <div className="w-1/2">
            <DataGrid
              columns={produtosColumns}
              rows={rows}
            />
          </div>
          <div className="w-1/2 h-96">
            <DataGrid
              columns={compraColumns}
              rows={itens}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdCompra;
