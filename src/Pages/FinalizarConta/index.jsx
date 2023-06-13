import React, { useEffect, useState, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { Modal } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";
import { MainContext } from "../../contexts";
import localePTBR from "../locale";
import { AiOutlineSearch } from "react-icons/ai";
import configFilterPanel from "../slotProps";

import imagemCantina from "../../assets/fundo.png";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Loading from "../Loading";
import CustomToolbar from "../../components/CustomToolbar";

function FinalizarConta() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { listarComprasPorCliente, finalizarConta } = useContext(MainContext);

  const location = useLocation();
  const row = location.state;

  const [compras, setCompras] = useState([]);
  const [load, setLoad] = useState(false);

  const [modalDetalhes, setModalDetalhes] = useState(false);
  const [detalhes, setDetalhes] = useState([]);

  const [totalConta, setTotalConta] = useState(0);

  const [carregando, setCarregando] = useState(false);

  function calculaTotalConta() {
    let total = 0;
    compras.map((item) => {
      total += item.total;
    });
    setTotalConta(total);
  }

  const comprasColumns = [
    {
      field: "dataHora",
      headerName: "Data/Hora",
      flex: 0.33,
      minWidth: 210,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      flex: 0.33,
      minWidth: 210,
      hideable: false,
      valueFormatter: (params) => {
        if (params.value == null) {
          return "";
        }
        return `R$ ${params.value.toFixed(2).replace(".", ",")}`;
      },
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      flex: 0.33,
      minWidth: 210,
      hideable: false,
      renderCell: (params) => (
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => {
              setDetalhes(JSON.parse(params.row.compra));
              setModalDetalhes(true);
            }}
            className="flex justify-center items-center p-2 rounded bg-blue-400 font-medium text-white"
          >
            Detalhes
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
      minWidth: 210,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "nome",
      headerName: "Nome",
      flex: 0.33,
      minWidth: 210,
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
      minWidth: 210,
      hideable: false,
      valueFormatter: (params) =>
        `R$ ${params.value.toFixed(2).replace(".", ",")}`,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
  ];

  useEffect(() => {
    calculaTotalConta();
  }, [compras]);

  useEffect(() => {
    listarComprasPorCliente(row.id).then((comps) => {
      setCompras(comps);
      setLoad(true);
    });
  }, []);

  if (load) {
    return (
      <div
        style={backgroundImageStyle}
        className="h-screen w-screen flex justify-center items-center"
      >
        <Modal open={modalDetalhes} onClose={() => setModalDetalhes(false)}>
          <div className="absolute top-auto left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded w-[95%] sm:w-1/3 h-1/2 flex flex-col justify-center items-center p-2 gap-3">
            <h3 className="font-bold opacity-80 text-lg">Detalhes da compra</h3>
            <div style={{ minHeight: 200 }} className="w-full">
              <DataGrid
                disableColumnMenu
                slots={{
                  toolbar: CustomToolbar,
                  openFilterButtonIcon: () => <AiOutlineSearch />,
                }}
                slotProps={configFilterPanel}
                localeText={localePTBR}
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

        <main className="container fixed top-20 bottom-0 rounded flex flex-col p-2 overflow-y-scroll">
          <div className="bg-white flex justify-start items-center w-full rounded-t p-2">
            <Link
              to="/clientes"
              className="flex justify-center items-center mr-3"
            >
              <BiArrowBack size={24} />
            </Link>
            <h2 className="my-4 text-xl">
              Finalizar conta de{" "}
              <span className="font-bold opacity-90">{row.nome}</span>
            </h2>
          </div>
          <div style={{ minHeight: 400 }} className="w-full h-full bg-white">
            <DataGrid
              disableColumnMenu
              slots={{
                toolbar: CustomToolbar,
                openFilterButtonIcon: () => <AiOutlineSearch />,
              }}
              slotProps={configFilterPanel}
              localeText={localePTBR}
              autoPageSize
              rows={compras}
              columns={comprasColumns}
            />
          </div>
          <div className="bg-white w-full flex flex-col p-2 rounded-b">
            <div className="flex w-full my-5 px-1 border-t-2 border-t-black border-dotted justify-between items-center">
              <span className="text-lg font-bold opacity-80">Total</span>
              <span className="text-lg">
                R$ {totalConta.toFixed(2).replace(".", ",")}
              </span>
            </div>
            {carregando ? (
              <button
                className="w-full rounded p-2 bg-green-500 text-white flex justify-center items-center"
                disabled
              >
                <VscLoading size={25} className="animate-spin" />
              </button>
            ) : compras.length ? (
              <button
                onClick={() => {
                  setCarregando(true);
                  finalizarConta(row.id).finally(() => setCarregando(false));
                }}
                className="w-full rounded p-2 bg-green-500 text-white"
              >
                Finalizar conta
              </button>
            ) : (
              <button
                disabled
                className="w-full rounded p-2 bg-gray-500/40 text-white"
              >
                Esse cliente não possui compras em aberto
              </button>
            )}
          </div>
        </main>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default FinalizarConta;
