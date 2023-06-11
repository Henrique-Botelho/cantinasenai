import React, { useContext, useState } from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { MainContext } from "../../contexts";
import CurrencyInput from "react-currency-input-field";

import Header from "../../components/Header";
import Nav from "../../components/Nav";

import { BiArrowBack } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";

function AdProduto() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { adicionarProduto } = useContext(MainContext);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");

  const [carregando, setCarregando] = useState(false);

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />
      <Nav />
      <main className="container fixed top-20 bottom-0 rounded flex flex-col sm:pt-[5%] p-2 overflow-y-scroll">
        <div className="bg-white flex justify-start items-center self-center w-full sm:w-96 p-2 rounded-t">
          <Link
            to="/produtos"
            className="flex justify-center items-center mr-3"
          >
            <BiArrowBack size={24} />
          </Link>
          <h2 className="my-4 text-xl">Novo produto</h2>
        </div>
        <form className="w-full sm:w-96 self-center bg-white p-2 rounded-b">
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
            <CurrencyInput
              decimalsLimit={2}
              prefix="R$"
              groupSeparator=" "
              decimalSeparator=","
              defaultValue={preco}
              onValueChange={(value) => {
                setPreco(value);
              }}
              step={1}
              className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2"
            />
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">Categoria</span>
            <input
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
              className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2"
              type="text"
            />
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
          {carregando ? (
            <button
              className="bg-green-500 text-gray-100 w-full rounded h-8 mt-3 flex justify-center items-center"
              disabled
            >
              <VscLoading size={25} className="animate-spin" />
            </button>
          ) : (
            <button
              onClick={(e) => {
                setCarregando(true);
                adicionarProduto(e, nome, preco, categoria, descricao).finally(
                  () => setCarregando(false)
                );
              }}
              className="bg-green-500 text-gray-100 w-full rounded h-8 mt-3"
            >
              Adicionar
            </button>
          )}
        </form>
      </main>
    </div>
  );
}

export default AdProduto;
