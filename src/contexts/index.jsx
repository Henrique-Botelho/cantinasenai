import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

// Criação do contexto
export const MainContext = createContext({});

import Loading from "../Pages/Loading";

const noReloadRoutes = ["/", "/edita-cliente", "/edita-produto"];

// Criação do provedor do contexto
function MainProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  let noEnableReload = noReloadRoutes.find(
    (element) => element === location.pathname
  );
  if (!noEnableReload) {
    localStorage.setItem("lastpathuser", location.pathname);
  }

  // Variáveis de Estado
  const [autenticado, setAutenticado] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Função aviso de sucesso
  function avisoSucesso(mensagem) {
    toast.success(mensagem, {
      theme: "colored",
      position: toast.POSITION.TOP_CENTER,
    });
  }

  // Função de manipulação de erro
  function manipulaErros(erro) {
    if (erro.response) {
      if (erro.response.data.message === "Token inválido!") {
        return manipulaVerificaToken();
      }
      toast.error(erro.response.data.message, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (erro.request) {
      toast.error("Erro ao acessar o servidor!", {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Ocorreu um erro inesperado!", {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    }
    console.log(erro);
  }

  function manipulaVerificaToken() {
    const token = localStorage.getItem("cantinasenaitoken");
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;

      api
        .post("/usuarios/verifica-token")
        .then((response) => {
          setAutenticado(true);
        })
        .catch((error) => {
          api.defaults.headers.Authorization = undefined;
          localStorage.removeItem("cantinasenaitoken");
          localStorage.removeItem("lastpathuser");
          setAutenticado(false);
          setUserIsAdmin(false);
        });
    }
    setLoading(false); // IMPORTANTE: ele sempre deve deixar de carregar!
  }

  // ===================== Login =====================
  async function manipulaLogin(e, email, senha) {
    e.preventDefault();
    email = email.trim();
    senha = senha.trim();
    try {
      const { data } = await api.post("/usuarios", { email, senha });
      localStorage.setItem("cantinasenaitoken", JSON.stringify(data.token));
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
      if (data.userIsAdmin === true) {
        setUserIsAdmin(true);
      }
      setAutenticado(true);
      navigate("/compras");
      avisoSucesso("Login realizado com sucesso!");
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function esqueciSenha(e, email) {
    e.preventDefault();
    try {
      await api.post("/usuarios/esqueci-senha", { email });
      avisoSucesso(`Um email foi enviado para ${email}!`);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function trocarSenha(e, token, senha, confirmaSenha) {
    e.preventDefault();
    try {
      const { data } = await api.post("/usuarios/alterar-senha", {
        token,
        senha,
        confirmaSenha,
      });
      navigate("/");
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function logout() {
    setAutenticado(false);
    setUserIsAdmin(false);
    localStorage.removeItem("cantinasenaitoken");
    localStorage.removeItem("lastpathuser");
    api.defaults.headers.Authorization = undefined;
    navigate("/");
    avisoSucesso("Deslogado com sucesso!");
  }

  // =================================================

  // ==================== Usuários ====================
  async function listarUsuarios() {
    try {
      const { data } = await api.get("/usuarios");
      return data;
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function cadastraUsuario(
    e,
    userName,
    email,
    senha,
    confirmaSenha,
    tipo
  ) {
    e.preventDefault();
    try {
      const { data } = await api.post("/usuarios/cadastro", {
        userName,
        email,
        senha,
        confirmaSenha,
        tipo,
      });
      navigate("/usuarios");
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function editarTipo(id, tipo) {
    try {
      const { data } = await api.put(`/usuarios/tipo/${id}`, { tipo });
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function editarAtivado(id, ativado) {
    try {
      const { data } = await api.put(`/usuarios/ativado/${id}`, { ativado });
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function excluirUsuario(id) {
    try {
      const { data } = await api.delete(`/usuarios/${id}`);
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  // =================================================

  // ==================== Produtos ====================
  async function listarProdutos() {
    try {
      const { data } = await api.get("/produtos", {
        params: {
          key: "07ad11b5bb6e2de98a535070ba93cdaf",
        },
      });
      return data;
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function adicionarProduto(e, nome, preco, categoria, descricao) {
    e.preventDefault();
    if (typeof preco === "string") {
      let index = preco.indexOf(",");
      if (index > -1) {
        preco = preco.replace(",", ".");
      }
      preco = parseFloat(preco);
    }
    try {
      const { data } = await api.post("/produtos", {
        nome,
        preco,
        categoria,
        descricao,
      });
      navigate("/produtos");
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function editarProduto(e, id, nome, preco, categoria, descricao) {
    e.preventDefault();
    if (typeof preco === "string") {
      let index = preco.indexOf(",");
      if (index > -1) {
        preco = preco.replace(",", ".");
      }
      preco = parseFloat(preco);
    }
    try {
      const { data } = await api.put(`/produtos/${id}`, {
        nome,
        preco,
        categoria,
        descricao,
      });
      navigate("/produtos");
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function exlcuirProduto(id) {
    try {
      const { data } = await api.delete(`/produtos/${id}`);
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  // ==================================================

  // ==================== Clientes ====================
  async function listarClientes() {
    try {
      const { data } = await api.get("/clientes");
      return data;
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function adicionarCliente(e, nome, numero, email) {
    e.preventDefault();
    try {
      const { data } = await api.post("/clientes", {
        nome,
        numero,
        email,
      });
      navigate("/clientes");
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function editarCliente(e, id, nome, numero, email) {
    e.preventDefault();
    try {
      const { data } = await api.put(`/clientes/${id}`, {
        nome,
        numero,
        email,
      });
      navigate("/clientes");
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function excluirCliente(id) {
    try {
      const { data } = await api.delete(`/clientes/${id}`);
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  // =================================================

  // ==================== Compras ====================
  async function listarCompras() {
    try {
      const { data } = await api.get("/compras");
      return data;
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function listarComprasPorCliente(id) {
    try {
      const { data } = await api.get(`/compras/${id}`);
      return data;
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function adicionarCompra(cliente, total, compra) {
    compra = JSON.stringify(compra);

    let dia = new Date().getDate();
    let mes = new Date().getMonth() + 1;
    let ano = new Date().getFullYear();
    let hora = new Date().getHours();
    let min = new Date().getMinutes();

    min = min.toString();
    if (min.length == 1) {
      min = `0${min}`;
    }

    let dataHora = `${dia}/${mes}/${ano} | ${hora}:${min}`;

    try {
      const { data } = await api.post("/compras", {
        cliente,
        total,
        compra,
        dataHora,
      });
      navigate("/compras");
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function pagarCompra(id) {
    try {
      const { data } = await api.put(`/compras/pagar/${id}`);
      navigate("/compras");
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function finalizarConta(id) {
    try {
      const { data } = await api.put(`/compras/${id}`);
      navigate("/clientes");
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function excluirComprasPagas() {
    try {
      const { data } = await api.delete("/compras/excluir/pagas");
      navigate("/compras");
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function excluirCompra(id) {
    try {
      const { data } = await api.delete(`/compras/${id}`);
      navigate("/compras");
      avisoSucesso(data.message);
    } catch (e) {
      manipulaErros(e);
    }
  }

  // =================================================

  // Verifica toda vez que o usuário entra na página se o token está lá
  useEffect(() => {
    manipulaVerificaToken();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <MainContext.Provider
      value={{
        manipulaLogin,
        esqueciSenha,
        trocarSenha,
        logout,
        autenticado,
        userIsAdmin,
        listarUsuarios,
        cadastraUsuario,
        editarTipo,
        editarAtivado,
        excluirUsuario,
        listarProdutos,
        adicionarProduto,
        editarProduto,
        exlcuirProduto,
        listarClientes,
        adicionarCliente,
        editarCliente,
        excluirCliente,
        listarCompras,
        listarComprasPorCliente,
        adicionarCompra,
        pagarCompra,
        finalizarConta,
        excluirComprasPagas,
        excluirCompra,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
