import React from "react";

import imagemCantina from "../../assets/fundo.png";

import Menu1 from "../../assets/manual/menu1.png";
import Menu2 from "../../assets/manual/menu2.png";

import Compras1 from "../../assets/manual/compras1.png";
import Compras2 from "../../assets/manual/compras2.png";

import Header from "../../components/Header";
import Nav from "../../components/Nav";

function Manual() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />
      <Nav />
      <main className="container flex flex-col fixed top-20 bottom-0 p-2 overflow-y-scroll">
        {/* Titulo da página */}
        <div className="w-full bg-white rounded-t p-5">
          <h1 className="text-2xl font-bold opacity-80">Manual do Usuário</h1>
        </div>
        {/* Indice da página */}
        <ul className="w-full p-5 pl-20 bg-white flex flex-col gap-3 list-disc">
          <li className="hover:underline text-blue-400">
            <a href="#menu">Menu</a>
          </li>
          <li className="hover:underline text-blue-400">
            <a href="#compras">Compras</a>
          </li>
          <li className="list-none">
            <ul className="w-full pl-5 bg-white flex flex-col gap-3 list-disc">
              <li className="hover:underline text-blue-400">
                <a href="">Adicionar uma compra</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="">Colocar uma compra como paga</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="">Detalhes de uma compra</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="">Excluir uma compra</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="">Excluir todas as compras pagas</a>
              </li>
            </ul>
          </li>
        </ul>
        {/* Começo do Menu */}
        <div id="menu" className="w-full bg-white p-5 pl-10 pb-0">
          <h2 className="text-xl font-bold opacity-70">Menu</h2>
        </div>
        <div className="w-full bg-white p-5 flex flex-col justify-center items-center gap-3">
          <p className="w-full text-justify sm:text-left tracking-wider">
            Para acessar o menu, clique no botão localizado no canto superior
            direito da página{" "}
            <a href="#menu1" className="hover:underline text-blue-400">
              (Figura 1)
            </a>
            :
          </p>
          <figure id="menu1" className="w-full lg:w-1/2">
            <img
              src={Menu1}
              alt="Imagem indicando o menu no canto superior direito"
              className="w-full rounded"
            />
            <figcaption>
              <strong>Figura 1:</strong> Indicação do botão para acessar o menu
              na página.
            </figcaption>
          </figure>
          <p className="w-full text-justify sm:text-left tracking-wider">
            No menu lateral{" "}
            <a href="#menu2" className="hover:underline text-blue-400">
              (Figura 2)
            </a>
            , é possível visualizar as opções do sistema que incluem os links
            para as principais páginas e o botão de <a href="">Sair</a>.
          </p>
          <figure id="menu2" className="w-full lg:w-1/2">
            <img
              src={Menu2}
              alt="Imagem mostrando o menu lateral direito aberto."
              className="w-full rounded"
            />
            <figcaption>
              <strong>Figura 2:</strong> Menu lateral aberto.
            </figcaption>
          </figure>
        </div>
        {/* Fim do Menu */}
        {/* Começo das Compras */}
        <div id="compras" className="w-full bg-white p-5 pl-10 pb-0">
          <h2 className="text-xl font-bold opacity-70">Compras</h2>
        </div>
        <div className="w-full bg-white p-5 flex flex-col justify-center items-center gap-3">
          <p className="w-full text-justify sm:text-left tracking-wider">
            Na tela de compras{" "}
            <a href="#compras1" className="hover:underline text-blue-400">
              (Figura 3)
            </a>{" "}
            é possível ver todas cada compra registrada, o nome do cliente que
            realizou a compra, a data e a hora em que a compra foi realizada, o
            status da compra (paga ou não paga), o total da compra e um conjunto
            de botões (ações).
          </p>
          <figure id="compras1" className="w-full lg:w-1/2">
            <img
              src={Compras1}
              alt="Imagem da tela de compras."
              className="w-full rounded"
            />
            <figcaption>
              <strong>Figura 3:</strong>Tela de compras.
            </figcaption>
          </figure>
          <div id="compras" className="w-full bg-white p-5 pl-10 pb-0">
            <h3 className="text-lg font-bold opacity-70">Adicionar Compra</h3>
          </div>
          <p className="w-full text-justify sm:text-left tracking-wider">
            Para adicionar uma compra, clique no botão verde{" "}
            <strong className="text-green-500">Adicionar Compra</strong>{" "}
            localizado no canto superior direito da tela de compras{" "}
            <a href="#compras2" className="hover:underline text-blue-400">(Figura 4)</a>.
          </p>
          <figure id="compras2" className="w-full lg:w-1/2">
            <img
              src={Compras2}
              alt="Imagem indicando o botão de adicionar compra."
              className="w-full rounded"
            />
            <figcaption>
              <strong>Figura 4:</strong>Indicação do botão de Adicionar Compra.
            </figcaption>
          </figure>
        </div>
      </main>
    </div>
  );
}

export default Manual;
