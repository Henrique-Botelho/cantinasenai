import React, { useEffect, useState, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Autocomplete } from "@mui/material";
import { MainContext } from "../../contexts";
import localePTBR from "../locale";
import { AiOutlineSearch } from "react-icons/ai";
import configFilterPanel from "../slotProps";

// Icones do react icons
import { BiArrowBack } from "react-icons/bi";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { VscLoading } from "react-icons/vsc";

import imagemCantina from "../../assets/fundo.png";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Loading from "../Loading";
import CustomToolbar from "../../components/CustomToolbar";

function AdCompra() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { listarProdutos, listarClientes, adicionarCompra } =
    useContext(MainContext);

  // Dados a serem enviados para o backend

  // Dados carregados da API
  const [produtos, setProdutos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [load, setLoad] = useState(false);

  // Dados que serão enviados para a API
  const [itens, setItens] = useState([]);
  const [cliente, setCliente] = useState(clientes[0]);
  const [total, setTotal] = useState(0);

  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    listarProdutos()
      .then((prods) => {
        setProdutos(prods);
        return listarClientes();
      })
      .then((clients) => {
        let clientesEntrada = [];
        clients.map((item) => {
          clientesEntrada.push(item.nome);
        });
        setClientes(clientesEntrada);
        setLoad(true);
      });
  }, []);

  // Funções para manipulação dos itens
  const adicionaProduto = (linha) => {
    const novosItens = [...itens];
    let adicionado = false;
    novosItens.map((produto) => {
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
      quantidade: 1,
    };
    novosItens.push(item);
    setItens(novosItens);
  };

  const removeProduto = (linha) => {
    const novosItens = [...itens];

    let indice = novosItens.indexOf(linha);
    if (indice > -1) {
      novosItens.splice(indice, 1);
      setItens(novosItens);
    }
  };

  const aumenta = (linha) => {
    const novosItens = [...itens];
    let indice = novosItens.indexOf(linha);
    if (indice > -1) {
      novosItens[indice].quantidade++;
      setItens(novosItens);
    }
  };
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
  };

  const calculaTotal = () => {
    let total = 0;
    itens.map((item) => {
      total += item.preco * item.quantidade;
    });
    setTotal(total);
  };

  // Modelagem da tabela de produtos
  const produtosColumns = [
    {
      field: "nome",
      headerName: "Nome",
      flex: 0.3,
      minWidth: 100,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      valueFormatter: (params) =>
        params.value[0].toUpperCase() + params.value.substr(1),
    },
    {
      field: "preco",
      headerName: "Preço",
      type: "number",
      flex: 0.3,
      minWidth: 100,
      hideable: false,
      valueFormatter: (params) =>
        `R$ ${params.value.toFixed(2).replace(".", ",")}`,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      flex: 0.3,
      minWidth: 100,
      hideable: false,
      renderCell: (params) => (
        <button onClick={() => adicionaProduto(params.row)}>
          <BsArrowRightCircleFill className="text-blue-400" size={25} />
        </button>
      ),
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
  ];

  // Modelagem da tabela da compra
  const compraColumns = [
    {
      field: "nome",
      headerName: "Nome",
      flex: 0.2,
      minWidth: 100,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "preco",
      headerName: "Preço",
      type: "number",
      flex: 0.2,
      minWidth: 100,
      hideable: false,
      valueFormatter: (params) =>
        `R$ ${params.value.toFixed(2).replace(".", ",")}`,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "quantidade",
      headerName: "Quantidade",
      type: "actions",
      flex: 0.2,
      minWidth: 100,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      renderCell: (params) => (
        <div className="flex flex-row justify-center items-center gap-3">
          <button onClick={() => diminui(params.row)}>
            <AiFillMinusCircle size={30} className="text-gray-800" />
          </button>
          <span className="text-lg select-none flex justify-center items-center w-8 border-2 border-gray-500 rounded">
            {params.row.quantidade}
          </span>
          <button onClick={() => aumenta(params.row)}>
            <AiFillPlusCircle size={30} className="text-gray-800" />
          </button>
        </div>
      ),
    },
  ];

  // Re-renderização do total
  useEffect(() => {
    calculaTotal();
  }, [itens]);

  if (load) {
    return (
      <div
        style={backgroundImageStyle}
        className="h-screen w-screen flex justify-center items-center"
      >
        <Header />
        <Nav />
        <main className="container flex flex-col fixed top-20 bottom-0 p-2 overflow-y-scroll">
          <div className="flex justify-start items-center w-full bg-white p-2 rounded-t">
            <Link
              to="/compras"
              className="flex justify-center items-center mr-3"
            >
              <BiArrowBack size={24} />
            </Link>
            <h2 className="my-4 text-xl">Nova Venda</h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:h-full w-full">
            <div
              style={{ minHeight: 400 }}
              className="w-full lg:w-1/2 bg-white p-2 lg:rounded-bl"
            >
              <DataGrid
                disableColumnMenu
                slots={{
                  toolbar: CustomToolbar,
                  openFilterButtonIcon: () => <AiOutlineSearch />,
                }}
                slotProps={configFilterPanel}
                localeText={localePTBR}
                columns={produtosColumns}
                rows={produtos}
                autoPageSize
                disableRowSelectionOnClick
              />
            </div>
            <div className="w-full flex flex-col justify-start items-center lg:w-1/2">
              <div className="flex flex-col justify-center items-start w-full p-2 bg-white">
                <span className="font-bold opacity-80 text-lg mr-5">
                  Cliente
                </span>
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
                    <div
                      className="border-2 border-gray-500 rounded h-"
                      ref={params.InputProps.ref}
                    >
                      <input
                        style={{
                          width: "100%",
                          outline: "none",
                          padding: "0.5rem",
                          height: "2rem",
                        }}
                        {...params.inputProps}
                      />
                    </div>
                  )}
                />
              </div>
              <div
                style={{ minHeight: 400 }}
                className="w-full lg:h-full bg-white p-2"
              >
                <DataGrid
                  disableColumnMenu
                  slots={{
                    toolbar: CustomToolbar,
                    openFilterButtonIcon: () => <AiOutlineSearch />,
                  }}
                  slotProps={configFilterPanel}
                  localeText={localePTBR}
                  autoPageSize
                  columns={compraColumns}
                  rows={itens}
                  sx={{
                    border: 0,
                  }}
                />
              </div>
              <div className="flex flex-col gap-3 w-full bg-white p-2 rounded-b">
                <div className="flex h-10 border-t-2 border-dotted border-t-gray-600 justify-between items-center">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="font-bold text-lg opacity-70">
                    R$ {total.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                {carregando ? (
                  <button
                    className="bg-green-500 text-gray-100 p-2 w-full rounded flex justify-center items-center"
                    disabled
                  >
                    <VscLoading className="animate-spin" size={25} />
                  </button>
                ) : clientes.length > 0 ? (
                  <button
                    onClick={() => {
                      setCarregando(true);
                      adicionarCompra(cliente, total, itens).finally(() =>
                        setCarregando(false)
                      );
                    }}
                    className="bg-green-500 text-gray-100 p-2 w-full rounded"
                  >
                    Adicionar
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-gray-500/40 text-gray-100 p-2 w-full rounded"
                  >
                    Adicione um cliente antes de adicionar uma venda
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default AdCompra;
