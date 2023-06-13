import React from "react";

import imagemCantina from "../../assets/fundo.png";

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
      <main className="container max-w-[1000px] flex flex-col fixed top-20 bottom-0 p-2 overflow-y-scroll">
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
            <a href="#vendas">Vendas</a>
          </li>
          <li className="list-none">
            <ul className="w-full pl-5 bg-white flex flex-col gap-3 list-disc">
              <li className="hover:underline text-blue-400">
                <a href="#adicionar-uma-venda">Adicionar uma venda</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#pagar-venda">Colocar uma venda como paga</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#detalhes-venda">Detalhes de uma venda</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#excluir-venda">Excluir uma venda</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#excluir-vendas-pagas">Excluir todas as venda pagas</a>
              </li>
            </ul>
          </li>
          <li className="hover:underline text-blue-400">
            <a href="#clientes">Clientes</a>
          </li>
          <li className="list-none">
            <ul className="w-full pl-5 bg-white flex flex-col gap-3 list-disc">
              <li className="hover:underline text-blue-400">
                <a href="#adicionar-cliente">Adicionar um cliente</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#editar-cliente">Editar um cliente</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#finalizar-conta">Finalizar a conta de um cliente</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#excluir-cliente">Excluir um cliente</a>
              </li>
            </ul>
          </li>
          <li className="hover:underline text-blue-400">
            <a href="#produtos">Produtos</a>
          </li>
          <li className="list-none">
            <ul className="w-full pl-5 bg-white flex flex-col gap-3 list-disc">
              <li className="hover:underline text-blue-400">
                <a href="#adicionar-produto">Adicionar um produto</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#editar-produto">Editar um produto</a>
              </li>
              <li className="hover:underline text-blue-400">
                <a href="#excluir-produto">Excluir um produto</a>
              </li>
            </ul>
          </li>
          <li className="hover:underline text-blue-400">
            <a href="#procurar">Procurar um item</a>
          </li>
          <li className="hover:underline text-blue-400">
            <a href="#sair-sistema">Sair do sistema</a>
          </li>
          <li className="hover:underline text-blue-400">
            <a href="#contato">Dúvidas? Entre em contato</a>
          </li>
        </ul>
        {/* Começo do Menu */}
        <div id="menu" className="w-full bg-white p-5 pb-0 border-t-4">
          <h2 className="text-xl font-bold opacity-90">1. Menu</h2>
        </div>
        <div className="w-full bg-white p-5 flex flex-col justify-center items-center gap-3">
          <p className="w-full text-justify tracking-wider leading-9">
            Para acessar o menu, clique no botão localizado no canto superior
            direito da página. O menu permite visualizar as opções do sistema,
            que incluem os links para as principais páginas e o botão de Sair.
          </p>
        </div>
        {/* Fim do Menu */}
        {/* Começo das Vendas */}
        <div id="vendas" className="w-full bg-white p-5 pb-0 border-t-4">
          <h2 className="text-xl font-bold opacity-90">2. Compras</h2>
        </div>
        <div className="w-full bg-white p-5 flex flex-col justify-center items-center gap-3">
          <p className="w-full text-justify tracking-wider leading-9">
            A tela de vendas é a primeira tela a ser aberta após o login. Nela é
            possível ver uma tabela contendo todas as vendas registradas no
            sistema. Cada venda apresenta o nome do cliente que a realizou, a
            data/Hora em que foi realizada, o status dela (paga ou não paga), o
            total da venda e um conjunto de ações (pagar/detalhes/excluir).
          </p>
          <div
            id="adicionar-uma-venda"
            className="w-full bg-white p-5 pb-0 border-t"
          >
            <h3 className="text-lg font-bold opacity-90">
              2.1. Adicionar Venda
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider">
            Para adicionar uma venda, clique no botão verde{" "}
            <span className="bg-green-500 text-white whitespace-nowrap p-1 rounded">
              Adicionar Venda
            </span>{" "}
            localizado no canto superior direito da tela de vendas.
          </p>
          <p className="w-full text-justify tracking-wider leading-9">
            Na tela de Adicionar Venda, aparece um campo para escolher o cliente
            e duas tabelas. A primeira tabela lista todos os produtos
            registrados no sistema, mostrando o nome, o preço e uma seta azul em
            cada produto. A segunda tabela começa vazia e ela representa o
            carrinho do cliente, ou seja, o que ele quer comprar.
          </p>
          <p className="w-full text-justify tracking-wider leading-9">
            Para adicionar uma venda, basta selecionar o nome do cliente que
            está comprando no campo <strong>Cliente</strong>, selecionar os
            produtos que ele quer comprar clicando na seta azul na linha do
            produto, escolher a quantidade de cada item na segunda tabela e
            clicar em{" "}
            <span className="bg-green-500 text-white p-1 rounded">
              Adicionar
            </span>
            .
          </p>
          <div id="pagar-venda" className="w-full bg-white p-5 pb-0 border-t">
            <h3 className="text-lg font-bold opacity-90">
              2.2. Colocar uma venda como paga
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider leading-9">
            Assim que uma venda é adicionada, seu status está como "não paga".
            Caso você queira colocar alguma venda como paga, basta ir na tela de{" "}
            <strong>Vendas</strong>, achar a venda que deseja colocar como paga
            e clicar no botão{" "}
            <span className="bg-green-500 text-white p-1 rounded">Pagar</span>{" "}
            na coluna <strong>Ações</strong> da tabela.
          </p>
          <div
            id="detalhes-venda"
            className="w-full bg-white p-5 pb-0 border-t"
          >
            <h3 className="text-lg font-bold opacity-90">
              2.3. Detalhes de uma venda
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider leading-9">
            Na tela de <strong>Vendas</strong>, você pode clicar no botão{" "}
            <span className="text-white bg-blue-500 p-1 rounded">Detalhes</span>{" "}
            para ver os produtos, as quantidades e os preços de uma certa venda.
          </p>
          <div id="excluir-venda" className="w-full bg-white p-5 pb-0 border-t">
            <h3 className="text-lg font-bold opacity-90">
              2.4. Excluir uma venda
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider leading-9">
            Na tela de <strong>Vendas</strong>, você pode excluir uma
            determinada venda clicando no botão{" "}
            <span className="text-white bg-red-500 p-1 rounded">Excluir</span>{" "}
            na coluna <strong>Ações</strong> do item que deseja excluir.
          </p>
          <div
            id="excluir-vendas-pagas"
            className="w-full bg-white p-5 pb-0 border-t"
          >
            <h3 className="text-lg font-bold opacity-90">
              2.5. Excluir todas as vendas pagas
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider leading-9">
            Caso você queira excluir todas as vendas que já foram pagas, você
            pode ir na tela de <strong>Vendas</strong> e clicar no botão{" "}
            <span className="text-white bg-red-500 p-1 rounded whitespace-nowrap">
              Exlcuir vendas pagas
            </span>
            . <strong>Cuidado!</strong> essa ação não tem volta.
          </p>
        </div>
        {/* Fim das Vendas */}
        {/* Começo dos Clientes */}
        <div id="clientes" className="w-full bg-white p-5 pb-0 border-t-4">
          <h2 className="text-xl font-bold opacity-90">3. Clientes</h2>
        </div>
        <div className="w-full bg-white p-5 flex flex-col justify-center items-center gap-3">
          <p className="w-full text-justify tracking-wider leading-9">
            Para acessar a tela de clientes basta clicar no botão de{" "}
            <strong>Menu</strong> e depois em <strong>Clientes</strong>. Dentro
            dela há uma tabela mostrando todos os clientes registrados no
            sistema, indicando o nome, o telefone, o email, um botão de
            finalizar conta e dois botões de ações possíveis para cada cliente.
          </p>
          <div
            id="adicionar-cliente"
            className="w-full bg-white p-5 pb-0 border-t"
          >
            <h3 className="text-lg font-bold opacity-90">
              3.1. Adicionar um cliente
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider leading-9">
            Para adicionar um cliente, clique no botão{" "}
            <span className="text-gray-100 bg-green-500 p-1 rounded whitespace-nowrap">
              Adicionar Cliente
            </span>{" "}
            no canto superior direito da tela de <strong>Clientes</strong>.
          </p>
          <p className="w-full text-justify tracking-wider leading-9">
            Na página de Adicionar Cliente, digite o nome, o telefone e o email
            do cliente e depois clique em{" "}
            <span className="text-gray-100 bg-green-500 p-1 rounded">
              Adicionar
            </span>
            .
          </p>
          <div
            id="editar-cliente"
            className="w-full bg-white p-5 pb-0 border-t"
          >
            <h3 className="text-lg font-bold opacity-90">
              3.2. Editar um cliente
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider leading-9">
            Para editar as informações de um determinado cliente, clique no
            botão{" "}
            <span className="bg-yellow-500 text-black p-1 rounded">Editar</span>{" "}
            na página <strong>Clientes</strong> na linha do cliente que deseja
            editar.
          </p>
          <div
            id="finalizar-conta"
            className="w-full bg-white p-5 pb-0 border-t"
          >
            <h3 className="text-lg font-bold opacity-90">
              3.3. Finalizar a conta de um cliente
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider leading-9">
            O botão{" "}
            <span className="text-gray-100 bg-blue-500 p-1 rounded whitespace-nowrap">
              Finalizar Conta
            </span>{" "}
            na tela de <strong>Clientes</strong> permite que você coloque todas
            as compras daquele cliente como pagas. Ao clicar no botão, você vai
            para a página de Finalizar Conta onde uma tabela mostra todas as
            compras não pagas de um cliente e o total que ele está devendo.
            Clique no botão{" "}
            <span className="text-gray-100 bg-green-500 p-1 rounded whitespace-nowrap">
              Finalizar Conta
            </span>{" "}
            para colocar as compras pendentes como pagas.
          </p>
          <div
            id="excluir-cliente"
            className="w-full bg-white p-5 pb-0 border-t"
          >
            <h3 className="text-lg font-bold opacity-90">
              3.4. Excluir um cliente
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider leading-9">
            Para excluir um determinado cliente, basta clicar no botão{" "}
            <span className="text-gray-100 bg-red-500 p-1 rounded">
              Exlcuir
            </span>{" "}
            na tela de <strong>Clientes</strong>, coluna <strong>Ações</strong>{" "}
            do cliente que deseja excluir.
          </p>
        </div>
        {/* Fim de Clientes */}
        {/* Começo de Produtos */}
        <div id="produtos" className="w-full bg-white p-5 pb-0 border-t-4">
          <h2 className="text-xl font-bold opacity-90">4. Produtos</h2>
        </div>
        <div className="w-full bg-white p-5 flex flex-col justify-center items-center gap-3">
          <p className="w-full text-justify tracking-wider leading-9">
            Para acessar a tela de produtos basta clicar no{" "}
            <strong>Menu</strong> e depois em <strong>Produtos</strong>. Uma
            tabela mostra cada produto registrado no sistema com seu nome, sua
            categoria, sua descrição, seu preço e um conjunto de Ações.
          </p>
          <div
            id="adicionar-produto"
            className="w-full bg-white p-5 pb-0 border-t"
          >
            <h3 className="text-lg font-bold opacity-90">
              4.1. Adicionar um produto
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider leading-9">
            Clique no botão{" "}
            <span className="text-gray-100 bg-green-500 p-1 rounded whitespace-nowrap">
              Adicionar Produto
            </span>{" "}
            na tela de <strong>Produtos</strong> para adicionar um produto.
          </p>
          <p className="w-full text-justify tracking-wider leading-9">
            Na tela de Adicionar Produto você deve informar o nome, o preço, a
            categoria e uma descrição para o produto que quer adicionar. Depois,
            basta clicar no botão{" "}
            <span className="text-gray-100 bg-green-500 p-1 rounded">
              Adicionar
            </span>{" "}
            para adicionar o produto.
          </p>
          <div
            id="editar-produto"
            className="w-full bg-white p-5 pb-0 border-t"
          >
            <h3 className="text-lg font-bold opacity-90">
              4.2. Editar um produto
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider leading-9">
            Para editar um produto, basta clicar no botão{" "}
            <span className="text-black bg-yellow-500 p-1 rounded">Editar</span>{" "}
            na coluna <strong>Ações</strong> do cliente que deseja editar.
          </p>
          <div
            id="excluir-produto"
            className="w-full bg-white p-5 pb-0 border-t"
          >
            <h3 className="text-lg font-bold opacity-90">
              4.3. Excluir um produto
            </h3>
          </div>
          <p className="w-full text-justify tracking-wider leading-9">
            Para excluir um produto, basta clicar no botão{" "}
            <span className="text-gray-100 bg-red-500 p-1 rounded">
              Excluir
            </span>{" "}
            na coluna <strong>Ações</strong> do cliente que deseja excluir.
          </p>
        </div>
        {/* Fim de Produtos */}
        <div id="procurar" className="w-full bg-white p-5 pb-0 border-t-4">
          <h2 className="text-xl font-bold opacity-90">5. Procurar um item</h2>
        </div>
        <div className="w-full bg-white p-5 flex flex-col justify-center items-center gap-3">
          <p className="w-full text-justify tracking-wider leading-9">
            Todas as tabelas do sistema possuem um botão de procurar em cima (com um
            símbolo de lupa). Clicando no botão de procurar você pode escrever o
            nome do que deseja procurar na tabela.
          </p>
          <p className="w-full text-justify tracking-wider leading-9">
            <strong>Exemplo:</strong> digamos que eu queira procurar o cliente
            com o nome de Henrique Botelho. Basta ir na tela de{" "}
            <strong>Clientes</strong>, clicar no botão <strong>Procurar</strong>{" "}
            e escrever Henrique Botelho. Se o cliente existir no sistema, a
            tabela irá mostrar ele.
          </p>
          <p className="w-full text-justify tracking-wider leading-9">
            Para retirar o filtro basta clicar no botão procurar novamente e
            clicar no "X" no canto superior esquerdo da caixa de procurar.
          </p>
        </div>
        <div id="sair-sistema" className="w-full bg-white p-5 pb-0 border-t-4">
          <h2 className="text-xl font-bold opacity-90">6. Sair do sistema</h2>
        </div>
        <div className="w-full bg-white p-5 flex flex-col justify-center items-center gap-3">
          <p className="w-full text-justify tracking-wider leading-9">
            Para sair do sistema basta acessar o <strong>Menu</strong> e clicar
            no botão{" "}
            <span className="text-gray-100 bg-red-500 p-1 rounded">Sair</span>
          </p>
        </div>
        <div id="contato" className="w-full bg-white p-5 pb-0 border-t-4">
          <h2 className="text-xl font-bold opacity-90">
            7. Dúvidas? Entre em contato
          </h2>
        </div>
        <div className="w-full bg-white p-5 flex flex-col justify-center items-center gap-3">
          <p className="w-full text-justify tracking-wider leading-9">
            Caso tenha qualquer dúvida ou problema com o sistema, entre em
            contato com o suporte por: <br />
            <strong>Email:</strong> henriquedmbds@gmail.com <br />
            <strong>WhatsApp:</strong> (11) 94567-3858
          </p>
        </div>
      </main>
    </div>
  );
}

export default Manual;
