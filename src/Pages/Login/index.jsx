import React from "react";

import { BsShop } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  return(
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900">
      <div className="flex flex-col justify-center items-center h-60">
        <BsShop className="text-red-800" size={100} />
        <h1 className="text-gray-100 text-4xl my-3">Cantina SENAI</h1>
        <span className="text-gray-100 my-3">Faça login abaixo</span>
      </div>
      <form className="flex flex-col justify-center items-center space-y-3">
        <div className="flex flex-row justify-start items-center bg-red-800 h-10 w-96 rounded">
          <MdEmail className="mx-3" size={25} />
          <input required placeholder="Email" className="placeholder:text-gray-100 h-full w-full bg-transparent focus:outline-none text-gray-100" type="text" />
        </div>
        <div className="flex flex-row justify-start items-center bg-red-800 h-10 w-96 rounded">
          <RiLockPasswordFill className="mx-3" size={25} />
          <input required placeholder="Senha" className=" placeholder:text-gray-100 h-full w-full bg-transparent focus:outline-none text-gray-100" type="text" />
        </div>
        <button onClick={(e) => e.preventDefault()} className=" text-gray-900 w-96 bg-gray-100 h-10 rounded hover:scale-105 duration-500">Entrar</button>
      </form>
    </div>
  )
}

export default Login;