import React, { useContext, useEffect, useState } from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { MainContext } from "../../contexts";
import { IoIosAlert } from "react-icons/io";
import { Modal } from "@mui/material";

import Header from "../../components/Header";
import Loading from "../Loading";

function Produtos() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { listarProdutos } = useContext(MainContext);

  const [produtos, setProdutos] = useState([]);
  const [load, setLoad] = useState(false);

  const [modalProduto, setModalProduto] = useState(false);
  const [idLinha, setIdLinha] = useState({});

  const produtosColumns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.166,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "nome",
      headerName: "Nome",
      flex: 0.166,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      valueFormatter: (params) =>
        params.value[0].toUpperCase() + params.value.slice(1),
    },
    {
      field: "categoria",
      headerName: "Categoria",
      flex: 0.166,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "descricao",
      headerName: "Descrição",
      flex: 0.166,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      valueFormatter: (params) =>
        `${params.value[0].toUpperCase() + params.value.slice(1)}.`,
    },
    {
      field: "preco",
      headerName: "Preço",
      type: "number",
      flex: 0.166,
      valueFormatter: (params) =>
        `R$ ${params.value.toFixed(2).replace(".", ",")}`,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      flex: 0.166,
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
    (async function getterProdutos() {
      const prods = await listarProdutos();
      setProdutos(prods);
      setLoad(true);
    })();
  }, []);

  if (load) {
    return (
      <div
        style={backgroundImageStyle}
        className="h-screen w-screen flex justify-center items-center"
      >
        <Modal open={modalProduto} onClose={() => setModalProduto(false)}>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded w-96 flex flex-col justify-center items-center p-8 gap-3">
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
                onClick={() => console.log(idLinha)}
                className="bg-blue-500 w-32 text-white rounded p-2"
              >
                Sim
              </button>
            </div>
          </div>
        </Modal>
        <Header />
        <main className="container rounded bg-white flex flex-col justify-center items-center">
          <div className="flex justify-between items-center w-full px-5">
            <h1 className="text-black font-bold opacity-75 text-xl">
              Tabela de Produtos
            </h1>
            <Link
              to="/adiciona-produto"
              className="my-8 bg-green-500 w-40 h-10 text-gray-100 rounded flex justify-center items-center"
            >
              Adicionar Produto
            </Link>
          </div>
          <div className="container bg-white rounded h-96 p-3">
            <DataGrid autoPageSize columns={produtosColumns} rows={produtos} />
          </div>
        </main>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default Produtos;
