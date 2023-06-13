import React, { useContext, useEffect, useState } from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { MainContext } from "../../contexts";
import { IoIosAlert } from "react-icons/io";
import { Modal } from "@mui/material";
import localePTBR from "../locale";
import { AiOutlineSearch } from "react-icons/ai";
import configFilterPanel from "../slotProps";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Loading from "../Loading";
import CustomToolbar from "../../components/CustomToolbar";

function Produtos() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { listarProdutos, exlcuirProduto } = useContext(MainContext);

  const [produtos, setProdutos] = useState([]);
  const [load, setLoad] = useState(false);
  const [reload, setReload] = useState(false);

  const [modalProduto, setModalProduto] = useState(false);
  const [idLinha, setIdLinha] = useState();

  const produtosColumns = [
    {
      field: "nome",
      headerName: "Nome",
      flex: 0.2,
      minWidth: 210,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      valueFormatter: (params) =>
        params.value[0].toUpperCase() + params.value.slice(1),
    },
    {
      field: "categoria",
      headerName: "Categoria",
      flex: 0.2,
      minWidth: 210,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "descricao",
      headerName: "Descrição",
      flex: 0.2,
      minWidth: 210,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      valueFormatter: (params) =>
        `${params.value[0].toUpperCase() + params.value.slice(1)}`,
    },
    {
      field: "preco",
      headerName: "Preço",
      type: "number",
      flex: 0.2,
      minWidth: 210,
      hideable: false,
      valueFormatter: (params) =>
        `R$ ${params.value.toFixed(2).replace(".", ",")}`,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
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
            to="/edita-produto"
            state={params.row}
            className="flex justify-center items-center p-2 rounded bg-yellow-400 font-medium text-black/90"
          >
            Editar
          </Link>
          <button
            onClick={() => {
              setIdLinha(params.row.id);
              setModalProduto(true);
            }}
            className="flex justify-center items-center p-2 rounded bg-red-400 font-medium text-white/90 text-sm"
          >
            Excluir
          </button>
        </div>
      ),
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
  ];

  useEffect(() => {
    listarProdutos().then((prods) => {
      setProdutos(prods);
      setLoad(true);
    });
  }, [reload]);

  if (load) {
    return (
      <div
        style={backgroundImageStyle}
        className="h-screen w-screen flex justify-center items-center"
      >
        <Modal open={modalProduto} onClose={() => setModalProduto(false)}>
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded w-[95%] sm:w-96 flex flex-col justify-center items-center p-8 gap-3">
            <IoIosAlert size={60} className="text-yellow-300" />
            <span>Excluir este item?</span>
            <div className="flex justify-between items-center gap-3">
              <button
                onClick={() => setModalProduto(false)}
                className="bg-gray-300 w-32 text-white rounded p-2"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setModalProduto(false);
                  exlcuirProduto(idLinha).finally(() => {
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
        <main className="container fixed top-20 bottom-0 rounded flex flex-col p-2 overflow-y-scroll">
          <div className="bg-white flex flex-col sm:flex-row justify-between items-center w-full rounded-t p-5 gap-3">
            <h1 className="text-black font-bold opacity-75 text-xl">
              Tabela de Produtos
            </h1>
            <Link
              to="/adiciona-produto"
              className="bg-green-500 w-40 h-10 text-gray-100 rounded flex justify-center items-center text-sm sm:text-base"
            >
              Adicionar Produto
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
              columns={produtosColumns}
              rows={produtos}
            />
          </div>
        </main>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default Produtos;
