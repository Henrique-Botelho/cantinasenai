import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../contexts";
import { useNavigate, useSearchParams } from "react-router-dom";

import { BsKeyFill } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { VscLoading } from "react-icons/vsc";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

function TrocarSenha() {
  const navigate = useNavigate();
  const { autenticado, trocarSenha } = useContext(MainContext);

  const [serachParams] = useSearchParams();
  const token = serachParams.get("token");

  if (!token) {
    useEffect(() => {
      navigate('/');
    }, []);
  }

  const [loading, setLoading] = useState(false);
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const [tipoSenha, setTipoSenha] = useState("password");
  const [tipoConfSenha, setTipoConfSenha] = useState("password");

  useEffect(() => {
    if (autenticado) {
      navigate("/compras");
    }
  }, [autenticado]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900 px-3 sm:px-0">
      <main className="container flex flex-col overflow-y-scroll p-2">
        <div className="flex flex-col justify-center items-center h-40 sm:h-60">
          <BsShop className="text-red-800 text-4xl sm:text-8xl"  />
          <h1 className="text-gray-100 text-2xl sm:text-4xl my-3">Cantina SENAI</h1>
        </div>
        <form className="flex flex-col self-center justify-center items-center space-y-3 bg-white rounded p-4 w-full sm:w-96">
          <div className="w-full flex justify-start items-center">
            <h1 className="text-lg font-bold text-black/80 mr-2">
              Alteração de senha
            </h1>
            <BsKeyFill size={40} className="text-gray-800" />
          </div>
          <span className="text-black/90 my-3 text-ellipsis break w-full text-justify">
            Digite uma nova senha de sua escolha
          </span>
          <div className="w-full flex justify-center items-center">
            <input
              tabIndex={1}
              autoFocus
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              className="placeholder:text-black/70 focus:outline-none text-black/90 border-2 rounded-l border-r-0 border-gray-800 h-10 w-full p-2"
              type={tipoSenha}
            />
            {tipoSenha === "password" ? (
              <button
                className="flex justify-center items-center border-2 rounded-r border-gray-800 h-full border-l-0 px-1"
                onClick={(e) => {
                  e.preventDefault();
                  setTipoSenha("text");
                }}
              >
                <MdVisibility size={25} />
              </button>
            ) : (
              <button
                className="flex justify-center items-center border-2 rounded-r border-gray-800 h-full border-l-0 px-1"
                onClick={(e) => {
                  e.preventDefault();
                  setTipoSenha("password");
                }}
              >
                <MdVisibilityOff size={25} />
              </button>
            )}
          </div>
          <div className="w-full flex justify-center items-center">
            <input
              tabIndex={2}
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
              placeholder="Confirmar senha"
              className="placeholder:text-black/70 focus:outline-none text-black/90 border-2 rounded-l border-r-0 border-gray-800 h-10 w-full p-2"
              type={tipoConfSenha}
            />
            {tipoConfSenha === "password" ? (
              <button
                className="flex justify-center items-center border-2 rounded-r border-gray-800 h-full border-l-0 px-1"
                onClick={(e) => {
                  e.preventDefault();
                  setTipoConfSenha("text");
                }}
              >
                <MdVisibility size={25} />
              </button>
            ) : (
              <button
                className="flex justify-center items-center border-2 rounded-r border-gray-800 h-full border-l-0 px-1"
                onClick={(e) => {
                  e.preventDefault();
                  setTipoConfSenha("password");
                }}
              >
                <MdVisibilityOff size={25} />
              </button>
            )}
          </div>
          <button
            tabIndex={3}
            onClick={(e) => {
              setLoading(true);
              trocarSenha(e, token, senha, confirmaSenha).finally(() => {
                setLoading(false);
              });
            }}
            className=" text-white w-full bg-green-500 h-10 rounded hover:scale-105 duration-500 flex justify-center items-center"
          >
            {loading ? (
              <VscLoading className="animate-spin text-white" size={30} />
            ) : (
              "Salvar"
            )}
          </button>
        </form>
      </main>
    </div>
  );
}

export default TrocarSenha;
