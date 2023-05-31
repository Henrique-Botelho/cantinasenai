import React, { useState, useContext } from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MainContext } from "../../contexts";

import Header from "../../components/Header";

import { BiArrowBack } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";

function EdCliente() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { editarCliente } = useContext(MainContext);

  const location = useLocation();
  const cliente = location.state;

  const [nome, setNome] = useState(cliente.nome);
  const [numero, setNumero] = useState(cliente.numero);
  const [email, setEmail] = useState(cliente.email);

  const [carregando, setCarregando] = useState(false);

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />
      <main className="container w-96 rounded bg-white flex flex-col justify-center items-center p-10">
        <div className="flex justify-start items-center w-full mb-5">
          <Link
            to="/clientes"
            className="flex justify-center items-center mr-3"
          >
            <BiArrowBack size={24} />
          </Link>
          <h2 className="my-4 text-xl">Editar cliente</h2>
        </div>
        <form className="w-full">
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
              <VscLoading size={25} className="animate-spin" />
            </button>
          ) : (
            <button
              onClick={(e) => {
                setCarregando(true);
                editarCliente(e, nome, numero, email).finally(() =>
                  setCarregando(false)
                );
              }}
              className="bg-green-500 text-gray-100 w-full rounded h-8 mt-3"
            >
              Salvar
            </button>
          )}
        </form>
      </main>
    </div>
  );
}

export default EdCliente;
