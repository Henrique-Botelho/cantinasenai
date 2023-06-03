import React, { useState, useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { IoIosAlert } from "react-icons/io";
import { Modal } from "@mui/material";
import { MainContext } from "../../contexts";

import imagemCantina from "../../assets/fundo.png";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Loading from "../Loading";

function Compras() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { listarCompras, excluirCompra, pagarCompra, excluirComprasPagas } = useContext(MainContext);

  const [compras, setCompras] = useState([]);
  const [load, setLoad] = useState(false);
  const [reload, setReload] = useState(false);

  const [modalCompra, setModalCompra] = useState(false);
  const [modalDetalhes, setModalDetalhes] = useState(false);
  const [modalPagar, setModalPagar] = useState(false);
  const [modalTodasCompras, setModalTodasCompras] = useState(false);

  const [idLinha, setIdLinha] = useState();
  const [detalhes, setDetalhes] = useState([]);

  const comprasColumns = [
    {
      field: "nome",
      headerName: "Cliente",
      flex: 0.2,
      hideable: false,
      description: "Nome do cliente que realizou a compra.",
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "dataHora",
      headerName: "Data/Hora",
      flex: 0.2,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.2,
      hideable: false,
      renderCell: (params) => {
        if (params.value === 0) {
          return (
            <span className="bg-orange-400 text-white p-2 rounded">
              Não pago
            </span>
          );
        } else if (params.value === 1) {
          return (
            <span className="bg-green-400 text-white p-2 rounded">Pago</span>
          );
        }
      },
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      flex: 0.2,
      valueFormatter: (params) => {
        if (params.value == null) {
          return "";
        }
        return `R$ ${params.value.toFixed(2).replace(".", ",")}`;
      },
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      flex: 0.2,
      hideable: false,
      renderCell: (params) => (
        <div className="flex justify-center items-center gap-2">
          {params.row.status === 0 && (
            <button
              onClick={() => {
                setIdLinha(params.row.id);
                setModalPagar(true);
              }}
              className="flex justify-center items-center p-2 rounded bg-indigo-600 font-medium text-white text-sm"
            >
              Pagar
            </button>
          )}

          <button
            onClick={() => {
              setDetalhes(JSON.parse(params.row.compra));
              setModalDetalhes(true);
            }}
            className="flex justify-center items-center p-2 rounded bg-blue-400 font-medium text-white"
          >
            Detalhes
          </button>
          <button
            onClick={() => {
              setIdLinha(params.row.id);
              setModalCompra(true);
            }}
            className="flex justify-center items-center p-2 rounded bg-red-400 font-medium text-white text-sm"
          >
            Excluir
          </button>
        </div>
      ),
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
  ];

  const detalhesColumns = [
    {
      field: "quantidade",
      headerName: "Quantidade",
      flex: 0.33,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "nome",
      headerName: "Nome",
      flex: 0.33,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      valueFormatter: (params) =>
        params.value[0].toUpperCase() + params.value.slice(1),
    },
    {
      field: "preco",
      headerName: "Preço",
      type: "number",
      flex: 0.33,
      hideable: false,
      valueFormatter: (params) =>
        `R$ ${params.value.toFixed(2).replace(".", ",")}`,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
  ];

  useEffect(() => {
    listarCompras().then((comp) => {
      setCompras(comp);
      setLoad(true);
    });
  }, [reload]);

  if (load) {
    return (
      <div
        style={backgroundImageStyle}
        className="h-screen w-screen flex justify-center items-center"
      >
        <Modal open={modalCompra} onClose={() => setModalCompra(false)}>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded w-[95%] sm:w-96 flex flex-col justify-center items-center p-8 gap-3">
            <IoIosAlert size={60} className="text-yellow-300" />
            <span>Excluir esta compra?</span>
            <div className="flex justify-between items-center gap-3">
              <button
                onClick={() => setModalCompra(false)}
                className="bg-gray-300 w-32 text-white rounded p-2"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setModalCompra(false);
                  excluirCompra(idLinha).finally(() => {
                    setReload(!reload);
                  });
                }}
                className="bg-blue-500 w-32 text-white rounded p-2"
              >
                Sim
              </button>
            </div>
          </div>
        </Modal>
        <Modal open={modalPagar} onClose={() => setModalPagar(false)}>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded w-[95%] sm:w-96 flex flex-col justify-center items-center p-8 gap-3">
            <IoIosAlert size={60} className="text-yellow-300" />
            <span>Deseja colocar essa compra como paga?</span>
            <div className="flex justify-between items-center gap-3">
              <button
                onClick={() => setModalPagar(false)}
                className="bg-gray-300 w-32 text-white rounded p-2"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setModalCompra(false);
                  pagarCompra(idLinha).finally(() => {
                    setModalPagar(false);
                    setReload(!reload);
                  });
                }}
                className="bg-blue-500 w-32 text-white rounded p-2"
              >
                Sim
              </button>
            </div>
          </div>
        </Modal>
        <Modal open={modalTodasCompras} onClose={() => setModalTodasCompras(false)}>
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded w-[95%] sm:w-96 flex flex-col justify-center items-center p-8 gap-3">
            <IoIosAlert size={60} className="text-yellow-300" />
            <span className="text-center">Tem certeza que deseja excluir todas as compras pagas? Essa ação é <strong>irreversível!</strong></span>
            <div className="flex justify-between items-center gap-3">
              <button
                onClick={() => setModalTodasCompras(false)}
                className="bg-gray-300 w-32 text-white rounded p-2"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setModalTodasCompras(false);
                  excluirComprasPagas()
                    .finally(() => {
                      setReload(!reload);
                  });
                }}
                className="bg-blue-500 w-32 text-white rounded p-2"
              >
                Sim
              </button>
            </div>
          </div>
        </Modal>
        <Modal open={modalDetalhes} onClose={() => setModalDetalhes(false)}>
          <div className="absolute top-auto left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded w-[95%] sm:container h-1/2 flex flex-col justify-center items-center p-8 gap-3">
            <h3 className="font-bold opacity-80 text-lg">Detalhes da compra</h3>
            <div className="w-full h-full">
              <DataGrid
                autoPageSize
                columns={detalhesColumns}
                rows={detalhes}
              />
            </div>
            <div className="flex justify-between items-center gap-3">
              <button
                onClick={() => setModalDetalhes(false)}
                className="bg-gray-400 w-32 text-white rounded p-2"
              >
                Fechar
              </button>
            </div>
          </div>
        </Modal>

        <Header />
        <Nav />

        <main className="container flex flex-col justify-center items-center fixed top-20 bottom-0 p-2">
          <div className="bg-white flex flex-col justify-between items-center w-full p-5 gap-3 sm:flex-row">
            <h1 className="text-black font-bold opacity-75 text-xl">
              Tabela de Compras
            </h1>
            <div className="flex justify-center items-center gap-3">
              <button
                onClick={() => setModalTodasCompras(true)}
                className=" bg-red-500 p-1 h-10 text-gray-100 rounded flex justify-center items-center text-sm sm:text-base"
              >
                Excluir compras pagas
              </button>
              <Link
                to="/adiciona-compra"
                className=" bg-green-500 p-1 px-3 h-10 text-gray-100 rounded flex justify-center items-center text-sm sm:text-base"
              >
                Adicionar Compra
              </Link>
            </div>
          </div>
          <div className="bg-white flex justify-center items-center w-full h-full p-5 overflow-x-scroll">
            <DataGrid autoPageSize rows={compras} columns={comprasColumns} />
          </div>
        </main>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default Compras;
