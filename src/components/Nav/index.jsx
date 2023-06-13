import React, { useState, useContext } from "react";
import { Modal } from "@mui/material";
import { MainContext } from "../../contexts";
import { Link } from "react-router-dom";
import { IoIosAlert } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";

function Nav() {
  const { logout } = useContext(MainContext);

  const [modal, setModal] = useState(false);

  return (
    <nav
      id="minhaSideBar"
      className="fixed h-screen bg-gray-900 right-0 w-screen xl:w-1/3 md:w-1/2 translate-x-full duration-500 z-10 overflow-y-scroll"
    >
      <Modal open={modal} onClose={() => setModal(false)}>
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded w-[95%] sm:w-96 flex flex-col justify-center items-center p-8 gap-3">
          <IoIosAlert size={60} className="text-yellow-300" />
          <span>Tem certeza que deseja sair?</span>
          <div className="flex justify-between items-center gap-3">
            <button
              onClick={() => setModal(false)}
              className="bg-gray-300 w-32 text-white rounded p-2"
            >
              Cancelar
            </button>
            <button
              onClick={logout}
              className="bg-blue-500 w-32 text-white rounded p-2"
            >
              Sim
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex w-full justify-between items-center p-10">
        <h2 className="text-gray-100 text-xl font-bold">Menu</h2>
        <button
          className="flex justify-center items-center"
          onClick={() => {
            document
              .getElementById("minhaSideBar")
              .classList.toggle("translate-x-full");
          }}
        >
          <RiCloseFill className="text-gray-100 h-full" size={32} />
        </button>
      </div>
      <ul className="w-full flex flex-col gap-5 px-16">
        <li className="hover:scale-105 hover:bg-gray-600 duration-500 rounded w-full h-10">
          <Link
            onClick={() => {
              document
                .getElementById("minhaSideBar")
                .classList.toggle("translate-x-full");
            }}
            to="/compras"
            className="text-gray-100 rounded flex justify-start items-center p-2 w-full h-full"
          >
            Vendas
          </Link>
        </li>
        <li className="hover:scale-105 hover:bg-gray-600 duration-500 rounded w-full h-10">
          <Link
            onClick={() => {
              document
                .getElementById("minhaSideBar")
                .classList.toggle("translate-x-full");
            }}
            to="/clientes"
            className="text-gray-100 flex rounded justify-start items-center p-2 w-full h-full"
          >
            Clientes
          </Link>
        </li>
        <li className="hover:scale-105 hover:bg-gray-600 duration-500 rounded w-full h-10">
          <Link
            onClick={() => {
              document
                .getElementById("minhaSideBar")
                .classList.toggle("translate-x-full");
            }}
            to="/produtos"
            className="text-gray-100 flex rounded justify-start items-center p-2 w-full h-full"
          >
            Produtos
          </Link>
        </li>
        <li className="hover:scale-105 hover:bg-gray-600 duration-500 rounded w-full h-10">
          <Link
            onClick={() => {
              document
                .getElementById("minhaSideBar")
                .classList.toggle("translate-x-full");
            }}
            to="/manual"
            className="text-gray-100 bg-green-800 rounded flex justify-start items-center p-2 w-full h-full"
          >
            Manual do Usuário
          </Link>
        </li>
        <li className="hover:scale-105 hover:bg-gray-600 duration-500 rounded w-full h-10">
          <button
            onClick={() => setModal(true)}
            className="text-gray-100 bg-red-800 rounded flex justify-start items-center p-2 w-full h-full"
          >
            Sair
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
