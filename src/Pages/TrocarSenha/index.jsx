import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../contexts";
import { useNavigate, useSearchParams } from "react-router-dom";

import { BsKeyFill } from "react-icons/bs";
import { BsShop } from "react-icons/bs";

function TrocarSenha() {
  const navigate = useNavigate();
  const { autenticado, trocarSenha } = useContext(MainContext);

  const [serachParams] = useSearchParams();
  const token = serachParams.get('token');

  console.log(token);

  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  useEffect(() => {
    if (autenticado) {
      navigate("/compras");
    }
  }, [autenticado]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900">
      <div className="flex flex-col justify-center items-center h-40">
        <BsShop className="text-red-800" size={50} />
        <h1 className="text-gray-100 text-xl my-3">Cantina SENAI</h1>
      </div>
      <form className="flex flex-col justify-center items-center space-y-3 bg-white rounded p-4 ">
        <div className="w-full flex justify-start items-center">
          <h1 className="text-lg font-bold text-black/80 mr-2">
            Alteração de senha
          </h1>
          <BsKeyFill size={40} className="text-gray-800" />
        </div>
        <span className="text-black/90 my-3 text-ellipsis break w-96 text-justify">
          Digite uma nova senha de sua escolha
        </span>
        <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" className="placeholder:text-black/70 text-black/90 border-2 rounded border-gray-800 h-10 w-full p-2" type="text" />
        <input value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} placeholder="Confirmar senha" className="placeholder:text-black/70 text-black/90 border-2 rounded border-gray-800 h-10 w-full p-2" type="text" />
        <button onClick={(e) => trocarSenha(e, token, senha, confirmaSenha)} className=" text-white w-96 bg-green-500 h-10 rounded hover:scale-105 duration-500">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default TrocarSenha;
