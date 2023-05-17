import React from "react";
import imagemCantina from "../../assets/fundo.png";

import Header from "../../components/Header";

function Produtos() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />
      <main className="container rounded bg-white flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-full px-5">
          <h1 className="text-black font-bold opacity-75 text-xl">Tabela de Produtos</h1>
          <button className="my-8 bg-green-500 w-40 h-10 text-gray-100 rounded">Adicionar Produto</button>
        </div>
        <div className="container bg-white rounded h-96">
          
        </div>
      </main>
    </div>
  );
}

export default Produtos;