import React from "react";
import { BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return(
    <header className="container h-20 bg-gray-800 rounded fixed top-0 flex justify-between items-center px-5 z-10">
      <div className="flex flex-col justify-center items-center h-full">
        <BsShop className="text-gray-100" size={30} />
        <h1 className="text-gray-100">Cantina SENAI</h1>
      </div>
      <nav className="flex justify-center items-center gap-8">
        <Link to="/compras" className="text-gray-100">Compras</Link>
        <Link to="/clientes" className="text-gray-100">Clientes</Link>
        <Link to="/produtos" className="text-gray-100">Produtos</Link>
        <Link className="text-gray-100">Sair</Link>
      </nav>
    </header>
  )
}

export default Header;