import React, { useContext, useState } from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { MainContext } from "../../contexts";

import Header from "../../components/Header";
import Nav from "../../components/Nav";

import { BiArrowBack } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";

function AdUsuario() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const { cadastraUsuario } = useContext(MainContext);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [tipo, setTipo] = useState("padrao");

  const estilosBtnTipo = [
    "text-white bg-blue-500 p-2 rounded",
    "text-blue-500 bg-white p-1 rounded border-2 border-blue-500",
  ];

  const [carregando, setCarregando] = useState(false);

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />
      <Nav />
      <main className="container fixed top-20 bottom-0 flex flex-col p-2 overflow-y-scroll">
        <div className="bg-white flex justify-start mt-[15vh] self-center items-center w-full sm:w-96 rounded-t">
          <Link
            to="/usuarios"
            className="flex justify-center items-center mr-3 p-2"
          >
            <BiArrowBack size={24} />
          </Link>
          <h2 className="my-4 text-xl">Novo Usuário</h2>
        </div>
        <form className="w-full bg-white p-2 self-center sm:w-96 rounded-b">
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">
              Nome do usuário
            </span>
            <input
              maxLength={50}
              minLength={3}
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
              Email do usuário
            </span>
            <input
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2"
              type="email"
            />
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">Senha</span>
            <input
              maxLength={20}
              minLength={8}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2"
              type="password"
            />
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">
              Confirmar Senha
            </span>
            <input
              maxLength={20}
              minLength={8}
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
              required
              className="h-8 text-sm border-2 border-gray-300 focus:outline-none rounded pl-2"
              type="password"
            />
          </div>
          <div className="flex flex-col mb-5">
            <span className="font-bold opacity-75 text-sm mb-2">
              Tipo do usuário
            </span>
            <div className="w-full flex justify-start items-center gap-3">
              <button
                onClick={() => setTipo("padrao")}
                className={
                  tipo === "padrao" ? estilosBtnTipo[0] : estilosBtnTipo[1]
                }
                type="button"
              >
                Padrão
              </button>
              <button
                onClick={() => setTipo("admin")}
                className={
                  tipo === "admin" ? estilosBtnTipo[0] : estilosBtnTipo[1]
                }
                type="button"
              >
                Admin
              </button>
            </div>
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
                cadastraUsuario(e, nome, email, senha, confirmaSenha, tipo).finally(() =>
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

export default AdUsuario;
