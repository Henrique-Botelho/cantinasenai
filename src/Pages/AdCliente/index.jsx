import React from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";

import Header from "../../components/Header";

import { BiArrowBack } from "react-icons/bi";

function AdCliente() {
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
      <main className="container w-96 rounded bg-white flex flex-col justify-center items-center p-10">
        <div className="flex justify-start items-center w-full">
          <Link className="flex justify-center items-center mx-2"><BiArrowBack /></Link>
          <h2 className="my-4 text-lg">Novo cliente</h2>
        </div>
        <form className="w-full">
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">Nome do cliente</span>
            <input className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2" type="text" />
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">Nome do cliente</span>
            <input className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2" type="tel" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default AdCliente;