import React from "react";
import { BsShop } from "react-icons/bs";
import { ImMenu } from "react-icons/im";

function Header() {
  return (
    <header className="container h-20 bg-gray-800 rounded fixed top-0 flex justify-center items-center px-5">
      <div className="flex flex-col justify-center items-center h-full">
        <BsShop className="text-gray-100" size={30} />
        <h1 className="text-gray-100">Cantina SENAI</h1>
      </div>
      <button
        onClick={() => {
          document
            .getElementById("minhaSideBar")
            .classList.toggle("translate-x-full");
        }}
        className="absolute right-3 h-full"
      >
        <ImMenu className="text-gray-100" size={30} />
      </button>
    </header>
  );
}

export default Header;
