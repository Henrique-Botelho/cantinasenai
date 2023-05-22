import React from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";

import { BiArrowBack } from "react-icons/bi";

function EdProduto() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const location = useLocation();
  const produto = location.state;

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />
      <main className="container w-1/3 rounded bg-white flex flex-col justify-center items-start p-10">
        <div className="flex flex-row mb-5">
          <Link to="/produtos" className="flex justify-center items-center mr-3"><BiArrowBack size={24} /></Link>
          <h2 className="my-4 text-xl">Editar produto</h2>
        </div>
        <form className="w-full">
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">Nome do produto</span>
            <input value={produto.nome} maxLength={50} autoFocus required className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2" type="text" />
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">Preço</span>
            <input value={produto.preco} required className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2" type="text" />
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">Categoria</span>
            <input value={produto.categoria} required className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2" type="text" />
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">Descrição</span>
            <textarea value={produto.descricao} className="resize-none text-sm border-2 border-gray-300 focus:outline-none rounded p-2" name="" id="" cols="30" rows="10" ></textarea>
          </div>
          <button onClick={(e) => e.preventDefault()} className="bg-green-500 text-gray-100 w-full rounded h-8 mt-3">Salvar</button>
        </form>
      </main>
    </div>
  );
}

export default EdProduto;