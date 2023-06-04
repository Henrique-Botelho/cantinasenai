import React, { useContext, useState } from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { MainContext } from "../../contexts";

import Header from "../../components/Header";
import Nav from "../../components/Nav";

import { BiArrowBack } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";

function AdCliente() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { adicionarCliente } = useContext(MainContext);

  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");

  const [carregando, setCarregando] = useState(false);

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />
      <Nav />
      <main className="container fixed top-20 bottom-0 flex flex-col sm:pt-[15%] p-2 overflow-y-scroll">
        <div className="bg-white flex justify-start self-center items-center w-full sm:w-96 rounded-t">
          <Link
            to="/clientes"
            className="flex justify-center items-center mr-3 p-2"
          >
            <BiArrowBack size={24} />
          </Link>
          <h2 className="my-4 text-xl">Novo cliente</h2>
        </div>
        <form className="w-full bg-white p-2 self-center sm:w-96 rounded-b">
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">
              Nome do cliente
            </span>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              autoFocus
              required
              className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">
              Telefone do cliente
            </span>
            <input
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
              className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2"
              type="tel"
            />
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">
              Email do cliente
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2"
              type="email"
            />
          </div>
          {carregando ? (
            <button
              className="bg-green-500 text-gray-100 w-full rounded h-8 mt-3 flex justify-center items-center"
              disabled
            >
              <VscLoading className="animate-spin" size={25} />
            </button>
          ) : (
            <button
              onClick={(e) => {
                setCarregando(true);
                adicionarCliente(e, nome, numero, email).finally(() =>
                  setCarregando(false)
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

export default AdCliente;
