import React from "react";
import { Link, useNavigate } from "react-router-dom";


import { TbError404 } from "react-icons/tb";

function Error() {
  const navigate = useNavigate();
  return(
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900 space-y-8">
      <TbError404 size={150} className="text-gray-100" />
      <span className="text-gray-100">Página não encontrada</span>
      <button className="flex justify-center items-center bg-red-800 rounded p-3 text-gray-100 w-60" onClick={() => navigate(-1)}>Voltar</button>
    </div>
  )
}

export default Error;