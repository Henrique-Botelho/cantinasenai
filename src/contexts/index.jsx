import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

// Criação do contexto
export const MainContext = createContext({});

import Loading from "../Pages/Loading";

// Criação do provedor do contexto
function MainProvider({ children }) {
  const navigate = useNavigate();
  const [autenticado, setAutenticado] = useState(false);
  const [loading, setLoading] = useState(true);

  // ===================== Login =====================
  async function manipulaLogin (email, senha) {
    try {
      const { data } = await api.post('/usuarios', {email, senha});
      
      localStorage.setItem('cantinasenaitoken', JSON.stringify(data.token));
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
      setAutenticado(true);
      navigate('/compras')
    } catch (e) {
      console.log(e);
    }
  }

  async function logout() {
    setAutenticado(false);
    localStorage.removeItem('cantinasenaitoken');
    api.defaults.headers.Authorization = undefined;
    navigate('/');
  }

  // =================================================



  // Verifica toda vez que o usuário entra na página se o token está lá
  useEffect(() => {
    const token = localStorage.getItem('cantinasenaitoken');
    if(token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAutenticado(true);
    }
    setLoading(false); // IMPORTANTE: ele sempre deve deixar de carregar!
  },[]);
  
  if (loading) {
    return <Loading />;
  }

  return (
    <MainContext.Provider
      value={{
        manipulaLogin,
        logout,
        autenticado
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
