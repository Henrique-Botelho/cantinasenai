import React, { useState, useContext } from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MainContext } from "../../contexts";

import Header from "../../components/Header";

import { BiArrowBack } from "react-icons/bi";

function EdProduto() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { editarProduto } = useContext(MainContext);

  const location = useLocation();
  const produto = location.state;

  const [id, setId] = useState(produto.id);
  const [nome, setNome] = useState(produto.nome);
  const [preco, setPreco] = useState(produto.preco);
  const [categoria, setCategoria] = useState(produto.categoria);
  const [descricao, setDescricao] = useState(produto.descricao);

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />
      <main className="container w-1/3 rounded bg-white flex flex-col justify-center items-start p-10">
        <div className="flex flex-row mb-5">
          <Link
            to="/produtos"
            className="flex justify-center items-center mr-3"
          >
            <BiArrowBack size={24} />
          </Link>
          <h2 className="my-4 text-xl">Editar produto</h2>
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
              editarProduto(e, id, nome, preco, categoria, descricao)
            }
            className="bg-green-500 text-gray-100 w-full rounded h-8 mt-3"
          >
            Salvar
          </button>
        </form>
      </main>
    </div>
  );
}

export default EdProduto;
