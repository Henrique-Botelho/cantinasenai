import React, { useContext, useEffect, useState } from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { MainContext } from "../../contexts";

import Header from "../../components/Header";
import Loading from "../Loading";
import produtosColumns from "./table";

function Produtos() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { listarProdutos } = useContext(MainContext);

  const [produtos, setProdutos] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async function getterProdutos() {
      const prods = await listarProdutos();
      setProdutos(prods);
      setLoad(true);
    })()
  }, []);

  if (load) {
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
              autoPageSize
              columns={produtosColumns}
              rows={produtos}
            />
          </div>
        </main>
      </div>
    );
  } else {
    return <Loading />
  }

}

export default Produtos;