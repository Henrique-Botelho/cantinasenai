import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { toast } from "react-toastify";

// Criação do contexto
export const MainContext = createContext({});

import Loading from "../Pages/Loading";

// Criação do provedor do contexto
function MainProvider({ children }) {
  const navigate = useNavigate();

  // Variáveis de Estado
  const [autenticado, setAutenticado] = useState(false);
  const [loading, setLoading] = useState(true);

  // Função de manipulação de erro
  function manipulaErros(erro) {
    if (erro.response) {
      if (erro.response.data.message === "Token inválido!") {
        return manipulaVerificaToken();
      }
      toast.error(erro.response.data.message, {
        theme: "colored",
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else if (erro.request) {
      toast.error("Erro ao acessar o servidor!", {
        theme: "colored",
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      toast.error("Ocorreu um erro inesperado!", {
        theme: "colored",
        position: toast.POSITION.BOTTOM_CENTER,
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
          setAutenticado(false);
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
      setAutenticado(true);
      navigate("/compras");
      toast.success("Login realizado com sucesso!", {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function esqueciSenha(e, email) {
    e.preventDefault();
    try {
      await api.post('/usuarios/esqueci-senha', { email });
      toast.success(`Um email foi enviado para ${email}!`, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function trocarSenha(e, token, senha, confirmaSenha) {
    e.preventDefault();
    try {
      const { data } = await api.post('/usuarios/alterar-senha', { token, senha , confirmaSenha });
      navigate('/');
      toast.success(data.message, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function logout() {
    setAutenticado(false);
    localStorage.removeItem("cantinasenaitoken");
    api.defaults.headers.Authorization = undefined;
    navigate("/");
    toast.success("Deslogado com sucesso!", {
      theme: "colored",
      position: toast.POSITION.BOTTOM_CENTER,
    });
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
    let indiceVirgula = preco.indexOf(",");
    if (indiceVirgula > -1) {
      preco = preco.replace(",", ".");
    }
    try {
      const { data } = await api.post("/produtos", {
        nome,
        preco,
        categoria,
        descricao,
      });
      navigate("/produtos");
      toast.success(data.message, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function editarProduto(e, id, nome, preco, categoria, descricao) {
    e.preventDefault();
    let indiceVirgula = preco.indexOf(",");
    if (indiceVirgula > -1) {
      preco = preco.replace(",", ".");
    }
    try {
      const { data } = await api.put(`/produtos/${id}`, {
        nome,
        preco,
        categoria,
        descricao,
      });
      navigate("/produtos");
      toast.success(data.message, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function exlcuirProduto(id) {
    try {
      const { data } = await api.delete(`/produtos/${id}`);
      toast.success(data.message, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
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

  async function adicionarCliente(e, nome, numero) {
    e.preventDefault();
    try {
      const { data } = await api.post("/clientes", {
        nome,
        numero,
      });
      navigate("/clientes");
      toast.success(data.message, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function editarCliente(e, nome, numero) {
    e.preventDefault();
    try {
      const { data } = await api.put("/clientes", {
        nome,
        numero,
      });
      navigate("/clientes");
      toast.success(data.message, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function exlcuirCliente(id) {
    try {
      const { data } = await api.delete(`/clientes/${id}`);
      toast.success(data.message, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
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
    try {
      const { data } = await api.post("/compras", {
        cliente,
        total,
        compra
      });
      navigate("/compras");
      toast.success(data.message, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function finalizarConta(id) {
    try {
      const { data } = await api.put(`/compras/${id}`);
      navigate("/clientes");
      toast.success(data.message, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      manipulaErros(e);
    }
  }

  async function excluirCompra(id) {
    try {
      const { data } = await api.delete(`/compras/${id}`);
      navigate("/compras");
      toast.success(data.message, {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
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
        listarProdutos,
        adicionarProduto,
        editarProduto,
        exlcuirProduto,
        listarClientes,
        adicionarCliente,
        editarCliente,
        exlcuirCliente,
        listarCompras,
        listarComprasPorCliente,
        adicionarCompra,
        finalizarConta,
        excluirCompra
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
