import React, { useContext, useState } from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { MainContext } from "../../contexts";

import Header from "../../components/Header";

import { BiArrowBack } from "react-icons/bi";

function AdProduto() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { adicionarProduto } = useContext(MainContext);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />
      <main className="container w-1/3 rounded bg-white flex flex-col justify-center items-center p-10">
        <div className="flex justify-start items-center w-full">
          <Link
            to="/produtos"
            className="flex justify-center items-center mr-3"
          >
            <BiArrowBack size={24} />
          </Link>
          <h2 className="my-4 text-xl">Novo produto</h2>
        </div>
        <form className="w-full">
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">
              Nome do produto
            </span>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              maxLength={50}
              autoFocus
              required
              className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">Preço</span>
            <input
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
              className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">Categoria</span>
            <input
              list="opcoes-categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
              className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2"
              type="text"
            />
            <datalist id="opcoes-categoria">
              <option value="bebidas" />
              <option value="lanches" />
              <option value="pastéis" />
              <option value="pizzas" />
              <option value="salgados" />
              <option value="sobremesas" />
              <option value="tapiocas salgadas" />
              <option value="tapiocas doces" />
            </datalist>
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">Descrição</span>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="resize-none text-sm border-2 border-gray-300 focus:outline-none rounded p-2"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            onClick={(e) =>
              adicionarProduto(e, nome, preco, categoria, descricao)
            }
            className="bg-green-500 text-gray-100 w-full rounded h-8 mt-3"
          >
            Adicionar
          </button>
        </form>
      </main>
    </div>
  );
}

export default AdProduto;
