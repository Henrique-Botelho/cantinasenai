import React, { useState, useContext } from "react";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Modal } from '@mui/material';

import { IoIosAlert } from "react-icons/io";

import { MainContext } from "../../contexts";

function Header() {
  const {logout} = useContext(MainContext);

  const [modal, setModal] = useState(false);
  const manipulaAbrirModal = () => setModal(true);
  const manipulaFecharModal = () => setModal(false);

  return(
    <header className="container h-20 bg-gray-800 rounded fixed top-0 flex justify-between items-center px-5 z-10">
      <Modal
        open={modal}
        onClose={manipulaFecharModal}
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded w-96 flex flex-col justify-center items-center p-8 gap-3">
          <IoIosAlert size={60} className="text-yellow-300" />
          <span>Tem certeza que deseja sair?</span>
          <div className="flex justify-between items-center gap-3">
            <button onClick={manipulaFecharModal} className="bg-gray-300 w-32 text-white rounded p-2">Cancelar</button>
            <button onClick={logout} className="bg-blue-500 w-32 text-white rounded p-2">Sim</button>
          </div>
        </div>
      </Modal>
      <div className="flex flex-col justify-center items-center h-full">
        <BsShop className="text-gray-100" size={30} />
        <h1 className="text-gray-100">Cantina SENAI</h1>
      </div>
      <nav className="flex justify-center items-center gap-8">
        <Link to="/compras" className="text-gray-100">Compras</Link>
        <Link to="/clientes" className="text-gray-100">Clientes</Link>
        <Link to="/produtos" className="text-gray-100">Produtos</Link>
        <button onClick={manipulaAbrirModal} className="text-gray-100">Sair</button>
      </nav>
    </header>
  )
}

export default Header;