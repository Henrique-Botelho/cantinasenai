import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { BsShop } from "react-icons/bs";
import { MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  const navigate = useNavigate();
  const { manipulaLogin, autenticado } = useContext(MainContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [tipoSenha, setTipoSenha] = useState("password");

  useEffect(() => {
    if (autenticado) {
      navigate("/compras");
    }
  }, [autenticado]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900">
      <main className="container flex flex-col overflow-y-scroll p-2">
        <div className="flex flex-col justify-center items-center h-40 sm:h-60">
          <BsShop className="text-red-800 text-4xl sm:text-8xl"  />
          <h1 className="text-gray-100 text-2xl sm:text-4xl my-3">Cantina SENAI</h1>
          <span className="text-gray-100 text-sm sm:text-lg my-3">Faça login abaixo</span>
        </div>
        <form className="flex flex-col justify-center items-center gap-3 p-3 w-full">
          <div className="flex flex-row justify-start items-center bg-red-800 h-10 w-full sm:w-96 rounded">
            <MdEmail className="mx-3" size={25} />
            <input
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="placeholder:text-gray-100 h-full w-full bg-transparent focus:outline-none text-gray-100"
              type="email"
            />
          </div>
          <div className="flex flex-row justify-start items-center bg-red-800 h-10 w-full sm:w-96 rounded">
            <RiLockPasswordFill className="mx-3" size={25} />
            <input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              className=" placeholder:text-gray-100 h-full w-full bg-transparent focus:outline-none text-gray-100"
              type={tipoSenha}
            />
            {tipoSenha === "password" ? (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setTipoSenha("text");
                }}
              >
                <MdVisibility className="mx-3" size={25} />
              </button>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setTipoSenha("password");
                }}
              >
                <MdVisibilityOff className="mx-3" size={25} />
              </button>
            )}
          </div>
          <button
            type="submit"
            onClick={(e) => manipulaLogin(e, email, senha)}
            className=" text-gray-900 w-full sm:w-96 bg-gray-100 h-10 rounded hover:scale-105 duration-500"
          >
            Entrar
          </button>
          <Link
            to="/esqueci-senha"
            className="text-red-800 mt-5 hover:text-red-500 text-sm sm:text-lg"
          >
            Esqueci minha senha
          </Link>
        </form>
      </main>
    </div>
  );
}

export default Login;
