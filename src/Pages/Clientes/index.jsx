import React, { useContext, useEffect, useState } from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Modal } from "@mui/material";
import { IoIosAlert } from "react-icons/io";
import Loading from "../Loading";
import { MainContext } from "../../contexts";
import localePTBR from "../locale";
import { AiOutlineSearch } from "react-icons/ai";
import configFilterPanel from "../slotProps";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import CustomToolbar from "../../components/CustomToolbar";

function Clientes() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { listarClientes, exlcuirCliente } = useContext(MainContext);

  const [clientes, setClientes] = useState([]);
  const [load, setLoad] = useState(false);
  const [reload, setReload] = useState(false);

  const [modalCliente, setModalCliente] = useState(false);
  const [idLinha, setIdLinha] = useState({});

  const clientesColumns = [
    {
      field: "nome",
      headerName: "Nome",
      flex: 0.2,
      minWidth: 210,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "numero",
      headerName: "Telefone",
      flex: 0.2,
      minWidth: 210,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.2,
      minWidth: 210,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "conta",
      headerName: "Conta",
      type: "actions",
      flex: 0.2,
      minWidth: 210,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      renderCell: (params) => (
        <Link
          to="/finalizar-conta"
          state={params.row}
          className="flex justify-center items-center p-2 rounded text-white/90 bg-blue-400"
        >
          Finalizar conta
        </Link>
      ),
    },
    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      flex: 0.2,
      minWidth: 210,
      hideable: false,
      renderCell: (params) => (
        <div className="flex justify-center items-center gap-2">
          <Link
            to="/edita-cliente"
            state={params.row}
            className="flex justify-center items-center p-2 rounded text-black/90 bg-yellow-400"
          >
            Editar
          </Link>
          <button
            onClick={() => {
              setIdLinha(params.row.id);
              setModalCliente(true);
            }}
            className="flex justify-center items-center p-2 rounded text-white/90 bg-red-400"
          >
            Excluir
          </button>
        </div>
      ),
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
  ];

  useEffect(() => {
    listarClientes().then((clients) => {
      setClientes(clients);
      setLoad(true);
    });
  }, [reload]);

  if (load) {
    return (
      <div
        style={backgroundImageStyle}
        className="h-screen w-screen flex justify-center items-center"
      >
        <Modal open={modalCliente} onClose={() => setModalCliente(false)}>
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded w-[95%] sm:w-96 flex flex-col justify-center items-center p-8 gap-3">
            <IoIosAlert size={60} className="text-yellow-300" />
            <span>Excluir este cliente?</span>
            <div className="flex justify-between items-center gap-3">
              <button
                onClick={() => setModalCliente(false)}
                className="bg-gray-300 w-32 text-white rounded p-2"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setModalCliente(false);
                  exlcuirCliente(idLinha).finally(() => {
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
        <Header />
        <Nav />
        <main className="container rounded fixed top-20 bottom-0 flex flex-col p-2 overflow-y-scroll">
          <div className="bg-white flex flex-col sm:flex-row justify-between items-center w-full p-5 gap-3 rounded-t">
            <h1 className="text-black font-bold opacity-75 text-xl">
              Tabela de Clientes
            </h1>
            <Link
              to="/adiciona-cliente"
              className=" bg-green-500 w-40 h-10 text-gray-100 rounded flex justify-center items-center text-sm sm:text-base"
            >
              Adicionar Cliente
            </Link>
          </div>
          <div
            style={{ minHeight: 400 }}
            className="w-full h-full bg-white rounded-b"
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
              columns={clientesColumns}
              rows={clientes}
            />
          </div>
        </main>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default Clientes;
