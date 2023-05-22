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
      if (e.response) {
        toast.error(e.response.data.message, {
          theme: "colored",
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
      console.log(e);
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
      console.log(e);
    }
  }

  async function adicionarProduto(e, nome, preco, categoria, descricao) {
    e.preventDefault();
    nome = nome.trim();
    preco = preco.trim();
    categoria = categoria.trim();
    descricao = descricao.trim();
    try {
      const response = await api.post("/produtos", {
        nome,
        preco,
        categoria,
        descricao,
      });
      console.log(response);
      navigate("/produtos");
      toast.success("Produto adicionado!", {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      if (e.response) {
        toast.error(e.response.data.message, {
          theme: "colored",
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
      console.log(e);
    }
  }

  async function exlcuirProduto(id) {
    try {
      const response = await api.delete(`/produtos/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  // ==================================================

  // Verifica toda vez que o usuário entra na página se o token está lá
  useEffect(() => {
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
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <MainContext.Provider
      value={{
        manipulaLogin,
        logout,
        autenticado,
        listarProdutos,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
