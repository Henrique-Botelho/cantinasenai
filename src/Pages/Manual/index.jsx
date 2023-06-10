import React from "react";

import imagemCantina from "../../assets/fundo.png";

import Menu1 from "../../assets/manual/menu1.png";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { BsArrowRightCircleFill } from "react-icons/bs";

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
                <a href="#adicionar-uma-compra">Adicionar uma compra</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#pagar-compra">Colocar uma compra como paga</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#detalhes-compra">Detalhes de uma compra</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#excluir-compra">Excluir uma compra</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#excluir-compras-pagas">
                  Excluir todas as compras pagas
                </a>
              </li>
            </ul>
          </li>
        </ul>
        {/* Começo do Menu */}
        <div id="menu" className="w-full bg-white p-5 pl-10 pb-0">
          <h2 className="text-xl font-bold opacity-90">Menu</h2>
        </div>
        <div className="w-full bg-white p-5 flex flex-col justify-center items-center gap-3">
          <p className="w-full text-justify tracking-wider">
            Para acessar o menu, clique no botão localizado no canto superior
            direito da página. O menu permite visualizar as opções do sistema,
            que incluem os links para as principais páginas e o botão de Sair.
          </p>
          {/* <figure className="w-full lg:w-1/2">
            <img
              src={Menu1}
              alt="Imagem indicando o menu no canto superior direito"
              className="w-full rounded"
            />
            <figcaption>
              <strong>Figura 1:</strong> Indicação do botão para acessar o menu
              na página.
            </figcaption>
          </figure> */}
        </div>
        {/* Fim do Menu */}
        {/* Começo das Compras */}
        <div id="compras" className="w-full bg-white p-5 pl-10 pb-0">
          <h2 className="text-xl font-bold opacity-90">Compras</h2>
        </div>
        <div className="w-full bg-white p-5 flex flex-col justify-center items-center gap-3">
          <p className="w-full text-justify tracking-wider">
            A tela de compras é a primeira tela a ser aberta após o login. Nela
            é possível ver uma tabela contendo todas as compras registradas no
            sistema. Cada compra apresenta o nome do cliente que a realizou, a
            data/Hora em que foi realizada, o status dela (paga ou não paga), o
            total da compra e um conjunto de ações (pagar/detalhes/excluir).
          </p>
          <div
            id="adicionar-uma-compra"
            className="w-full bg-white p-5 pb-0"
          >
            <h3 className="text-lg font-bold opacity-90">Adicionar Compra</h3>
          </div>
          <p className="w-full text-justify tracking-wider">
            Para adicionar uma compra, clique no botão verde{" "}
            <span className="bg-green-500 text-white whitespace-nowrap p-1 rounded">
              Adicionar Compra
            </span>{" "}
            localizado no canto superior direito da tela de compras.
          </p>
          <p className="w-full text-justify tracking-wider">
            Na tela de Adicionar Compra, aparece um campo para escolher o
            cliente e duas tabelas. A primeira tabela lista todos os produtos
            registrados no sistema, mostrando o nome, o preço e uma seta azul em
            cada produto. A segunda tabela começa vazia e ela representa o
            carrinho do cliente, ou seja, o que ele quer comprar.
          </p>
          <p className="w-full text-justify tracking-wider">
            Para adicionar uma compra, basta selecionar o nome do cliente que
            está comprando no campo <strong>Cliente</strong>, selecionar os
            produtos que ele quer comprar clicando na seta azul na linha do
            produto, escolher a quantidade de cada item na segunda tabela e
            clicar em{" "}
            <span className="bg-green-500 text-white p-1 rounded">
              Adicionar
            </span>
            .
          </p>
          <div id="pagar-compra" className="w-full bg-white p-5 pb-0">
            <h3 className="text-lg font-bold opacity-90">
              Colocar uma compra como paga
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider">
            Assim que uma compra é adicionada, seu status está como "não paga".
            Caso você queira colocar alguma compra como paga, basta ir na tela
            de <strong>Compras</strong>, achar a compra que deseja colocar como
            paga e clicar no botão{" "}
            <span className="bg-green-500 text-white p-1 rounded">Pagar</span>{" "}
            na coluna <strong>Ações</strong> da tabela.
          </p>
          <div id="detalhes-compra" className="w-full bg-white p-5 pb-0">
            <h3 className="text-lg font-bold opacity-90">
              Detalhes de uma compra
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider">
            Na tela de <strong>Compras</strong>, você pode clicar no botão{" "}
            <span className="text-white bg-blue-500 p-1 rounded">Detalhes</span>{" "}
            para ver os produtos, as quantidades e os preços de uma certa
            compra.
          </p>
          <div id="excluir-compra" className="w-full bg-white p-5 pb-0">
            <h3 className="text-lg font-bold opacity-90">Excluir uma compra</h3>
          </div>
          <p className="w-full text-justify tracking-wider">
            Na tela de <strong>Compras</strong>, você pode excluir uma
            determinada clicando no botão{" "}
            <span className="text-white bg-red-500 p-1 rounded">Excluir</span>{" "}
            na coluna <strong>Ações</strong> do item que deseja excluir.
          </p>
          <div
            id="excluir-compras-pagas"
            className="w-full bg-white p-5 pb-0"
          >
            <h3 className="text-lg font-bold opacity-90">
              Excluir todas as compras pagas
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider">
            Caso você queira excluir todas as compras que já foram pagas, você
            pode ir na tela de <strong>Compras</strong> e clicar no botão{" "}
            <span className="text-white bg-red-500 p-1 rounded whitespace-nowrap">
              Exlcuir compras pagas
            </span>
            . <strong>Cuidado!</strong> essa ação não tem volta.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Manual;
