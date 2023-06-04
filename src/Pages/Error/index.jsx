import React from "react";
import { useNavigate } from "react-router-dom";


import { TbError404 } from "react-icons/tb";

function Error() {
  const navigate = useNavigate();
  return(
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900 space-y-8">
      <main className="container flex flex-col overflow-y-scroll p-2 gap-3">
        <TbError404 className="text-gray-100 self-center text-8xl" />
        <span className="text-gray-100 self-center">Página não encontrada</span>
        <button className="flex justify-center items-center self-center bg-red-800 rounded p-2 text-gray-100 w-full sm:w-60" onClick={() => navigate(-1)}>Voltar</button>
      </main>
    </div>
  )
}

export default Error;