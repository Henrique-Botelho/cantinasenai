import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Autocomplete } from "@mui/material";

import { BiArrowBack } from "react-icons/bi";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";

import imagemCantina from "../../assets/fundo.png";

import Header from "../../components/Header";


function AdCompra() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  let clientes = ["Henrique", "Heitor", "Guilherme"];

  const rows = [
    {id: 1, nome: "Pão de queijo", preco: 3},
    {id: 2, nome: "Pão de queijo", preco: 3},
    {id: 3, nome: "Pão de queijo", preco: 3},
    {id: 4, nome: "Pão de queijo", preco: 3},
    {id: 5, nome: "Pão de queijo", preco: 3},
    {id: 6, nome: "Pão de queijo", preco: 3},
    {id: 7, nome: "Pão de queijo", preco: 3},
    {id: 8, nome: "Pão de queijo", preco: 3},
    {id: 9, nome: "Pão de queijo", preco: 3},
    {id: 10, nome: "Pão de queijo", preco: 3},
    {id: 11, nome: "Pão de queijo", preco: 3},
    {id: 12, nome: "Pão de queijo", preco: 3},
    {id: 13, nome: "Pão de queijo", preco: 3},
    {id: 14, nome: "Pão de queijo", preco: 3},
    {id: 15, nome: "Pão de queijo", preco: 3},
    {id: 16, nome: "Pão de queijo", preco: 3},
    {id: 17, nome: "Pão de queijo", preco: 3},
    {id: 18, nome: "Pão de queijo", preco: 3},
    {id: 19, nome: "Pão de queijo", preco: 3},
    {id: 20, nome: "Pão de queijo", preco: 3},
  ]

  const [itens, setItens] = useState([]);
  const [cliente, setCliente] = useState(clientes[0]);
  const [total, setTotal] = useState(0);

  const adicionaProduto = (linha) => {
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
    const item = {
      id: linha.id,
      nome: linha.nome,
      preco: linha.preco,
      quantidade: 1
    }
    novosItens.push(item);
    setItens(novosItens);
    
  }

  const removeProduto = (linha) => {
    const novosItens = [...itens];

    let indice = novosItens.indexOf(linha);
    if (indice > -1) {
      novosItens.splice(indice, 1);
      setItens(novosItens);
    }
    calculaTotal();
  }

  const aumenta = (linha) => {
    const novosItens = [...itens];
    let indice = novosItens.indexOf(linha);
    if (indice > -1) {
      novosItens[indice].quantidade++;
      setItens(novosItens);
    }
    calculaTotal();
  }
  const diminui = (linha) => {
    const novosItens = [...itens];
    let indice = novosItens.indexOf(linha);
    if (indice > -1) {
      if (novosItens[indice].quantidade > 1) {
        novosItens[indice].quantidade--;
        setItens(novosItens);
      } else if (novosItens[indice].quantidade === 1) {
        removeProduto(linha);
      }
    }
    calculaTotal();
  }

  const calculaTotal = () => {
    let total = 0;
    itens.map(item => {
      total += item.preco * item.quantidade;
    });
    setTotal(total);
  }

  const produtosColumns = [
    {
      field: "nome",
      headerName: "Nome",
      flex: 0.3,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "preco",
      headerName: "Preço",
      type: "number",
      flex: 0.3,
      valueFormatter: (params) => `R$ ${params.value.toFixed(2).replace('.', ',')}`,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      flex: 0.3,
      renderCell: (params) => (
        <button onClick={() => {
          adicionaProduto(params.row);
          calculaTotal();
        }}><BsArrowRightCircleFill className="text-blue-400" size={25} /></button>
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
      type: "actions",
      flex: 0.2,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      renderCell: (params) => (
        <div className="flex flex-row justify-center items-center gap-3">
          <button onClick={() => {
            diminui(params.row);
            calculaTotal();
            }}><AiFillMinusCircle size={30} className="text-gray-800" /></button>
          <span className="text-lg select-none flex justify-center items-center w-8 border-2 border-gray-500 rounded">{params.row.quantidade}</span>
          <button onClick={() => {
            aumenta(params.row);
            calculaTotal();
            }}><AiFillPlusCircle size={30} className="text-gray-800" /></button>
        </div>
      )
    },
  ]

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />

      <main className="container h-4/5 rounded bg-white flex flex-col justify-start items-center p-3">
        <div className="flex justify-start items-center w-full">
          <Link to="/compras" className="flex justify-center items-center mr-3"><BiArrowBack size={24} /></Link>
          <h2 className="my-4 text-xl">Nova Compra</h2>
        </div>
        <div className="flex w-full h-5/6 gap-3">
          <div className="w-1/2 h-full">
            <DataGrid
              columns={produtosColumns}
              rows={rows}
              autoPageSize
              disableRowSelectionOnClick
            />
          </div>
          <div className="w-1/2 h-5/6">
            <div className="flex flex-col justify-center items-start w-full pl-3">
              <span className="font-bold opacity-80 text-lg mr-5">Cliente</span>
              <Autocomplete
                value={cliente}
                onChange={(event, novoInput) => {
                  setCliente(novoInput);
                }}
                disablePortal
                id="combo-box-demo"
                options={clientes}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <div className="border-2 border-gray-500 rounded h-" ref={params.InputProps.ref}>
                    <input style={{width: '100%', outline: "none", padding: '0.5rem', height: '2rem'}}  {...params.inputProps} />
                  </div>
                )}
              />
            </div>
            <div className="h-full">
              <DataGrid
                autoPageSize
                columns={compraColumns}
                rows={itens}
                sx={{
                  border: 0
                }}
              />
              <div className="space-y-2">
                <div className="flex h-10 px-2 border-t-2 border-dotted border-t-gray-600 justify-between items-center">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="font-bold text-lg opacity-70">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
                <button className="bg-green-500 text-gray-100 p-2 w-full rounded">Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdCompra;
