import React, { useContext, useEffect, useState } from "react";
import imagemCantina from "../../assets/fundo.png";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Modal } from "@mui/material";
import { IoIosAlert } from "react-icons/io";
import Loading from "../Loading";
import { MainContext } from "../../contexts";
import localePTBR from "../locale";
import { AiOutlineSearch } from "react-icons/ai";
import configFilterPanel from "../slotProps";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import CustomToolbar from "../../components/CustomToolbar";

function Usuarios() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const navigate = useNavigate();

  const { listarUsuarios, editarTipo, editarAtivado, excluirUsuario, userIsAdmin } =
    useContext(MainContext);

  useEffect(() => {
    if (!userIsAdmin) {
      navigate("/compras");
    }
  },[]);

  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);
  const [reload, setReload] = useState(false);

  const [modalUsuario, setModalUsuario] = useState(false);
  const [modalTipo, setModalTipo] = useState(false);
  const [modalAtivado, setModalAtivado] = useState(false);

  const [idLinha, setIdLinha] = useState({});
  const [typeUser, setTypeUser] = useState("");
  const [ativado, setAtivado] = useState();

  const usuariosColumns = [
    {
      field: "userName",
      headerName: "Nome do Usuário",
      flex: 0.25,
      minWidth: 210,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.25,
      minWidth: 210,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "tipo",
      headerName: "Tipo",
      flex: 0.25,
      minWidth: 210,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
      renderCell: params => params.row.tipo === "admin" ? <span className="text-blue-500">ADMIN</span> : "Padrão"
    },
    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      flex: 0.25,
      minWidth: 400,
      hideable: false,
      renderCell: (params) => (
        <div className="flex justify-center items-center gap-2">
          {params.row.ativado === 1 ? (
            <button
              onClick={() => {
                setAtivado(0);
                setIdLinha(params.row.id);
                setModalAtivado(true);
              }}
              className="flex justify-center items-center p-2 rounded text-blue-500 bg-white border-2 border-blue-500"
            >
              Desativar
            </button>
          ) : (
            <button
              onClick={() => {
                setAtivado(1);
                setIdLinha(params.row.id);
                setModalAtivado(true);
              }}
              className="flex justify-center items-center p-2 rounded text-white/90 bg-blue-500"
            >
              Ativar
            </button>
          )}
          {params.row.tipo === "admin" ? (
            <button
              onClick={() => {
                setTypeUser("padrao");
                setIdLinha(params.row.id);
                setModalTipo(true);
              }}
              className="flex justify-center items-center p-2 rounded text-white bg-yellow-500 w-40"
            >
              Mudar para Padrão
            </button>
          ) : (
            <button
              onClick={() => {
                setTypeUser("admin");
                setIdLinha(params.row.id);
                setModalTipo(true);
              }}
              className="flex justify-center items-center p-2 rounded text-white bg-yellow-500 w-40"
            >
              Mudar para Admin
            </button>
          )}
          <button
            onClick={() => {
              setIdLinha(params.row.id);
              setModalUsuario(true);
            }}
            className="flex justify-center items-center p-2 rounded text-white/90 bg-red-400"
          >
            Excluir
          </button>
        </div>
      ),
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
  ];

  useEffect(() => {
    listarUsuarios().then((users) => {
      setUsers(users);
      setLoad(true);
    });
  }, [reload]);

  if (load) {
    return (
      <div
        style={backgroundImageStyle}
        className="h-screen w-screen flex justify-center items-center"
      >
        <Modal open={modalTipo} onClose={() => setModalTipo(false)}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded w-[95%] sm:w-96 flex flex-col justify-center items-center p-8 gap-3">
            <IoIosAlert size={60} className="text-yellow-300" />
            <span className="text-center">
              Alterar usuário para {typeUser}? Apenas usuários administradores
              podem acessar a Área de Administrador.
            </span>
            <div className="flex justify-between items-center gap-3">
              <button
                onClick={() => setModalTipo(false)}
                className="bg-gray-300 w-32 text-white rounded p-2"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setModalTipo(false);
                  editarTipo(idLinha, typeUser).finally(() =>
                    setReload(!reload)
                  );
                }}
                className="bg-blue-500 w-32 text-white rounded p-2"
              >
                Sim
              </button>
            </div>
          </div>
        </Modal>
        <Modal open={modalAtivado} onClose={() => setModalAtivado(false)}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded w-[95%] sm:w-96 flex flex-col justify-center items-center p-8 gap-3">
            <IoIosAlert size={60} className="text-yellow-300" />
            <span className="text-center">
              {ativado
                ? "Ativar o usuário?"
                : "Desativar o usuário? Usuários desativados não podem acessar o sistema."}
            </span>
            <div className="flex justify-between items-center gap-3">
              <button
                onClick={() => setModalAtivado(false)}
                className="bg-gray-300 w-32 text-white rounded p-2"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setModalAtivado(false);
                  editarAtivado(idLinha, ativado).finally(() =>
                    setReload(!reload)
                  );
                }}
                className="bg-blue-500 w-32 text-white rounded p-2"
              >
                Sim
              </button>
            </div>
          </div>
        </Modal>
        <Modal open={modalUsuario} onClose={() => setModalUsuario(false)}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded w-[95%] sm:w-96 flex flex-col justify-center items-center p-8 gap-3">
            <IoIosAlert size={60} className="text-yellow-300" />
            <span>Excluir este usuário?</span>
            <div className="flex justify-between items-center gap-3">
              <button
                onClick={() => setModalUsuario(false)}
                className="bg-gray-300 w-32 text-white rounded p-2"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setModalUsuario(false);
                  excluirUsuario(idLinha).finally(() => setReload(!reload));
                }}
                className="bg-blue-500 w-32 text-white rounded p-2"
              >
                Sim
              </button>
            </div>
          </div>
        </Modal>
        <Header />
        <Nav />
        <main className="container rounded fixed top-20 bottom-0 flex flex-col p-2 overflow-y-scroll">
          <div className="bg-white flex flex-col sm:flex-row justify-between items-center w-full p-5 gap-3 rounded-t">
            <h1 className="text-black font-bold opacity-75 text-xl">
              Usuários do Sistema
            </h1>
            <Link
              to="/adiciona-usuario"
              className=" bg-green-500 w-40 h-10 text-gray-100 rounded flex justify-center items-center text-sm sm:text-base"
            >
              Adicionar Usuário
            </Link>
          </div>
          <div
            style={{ minHeight: 400 }}
            className="w-full h-full bg-white rounded-b"
          >
            <DataGrid
              disableColumnMenu
              slots={{
                toolbar: CustomToolbar,
                openFilterButtonIcon: () => <AiOutlineSearch />,
              }}
              slotProps={configFilterPanel}
              localeText={localePTBR}
              autoPageSize
              columns={usuariosColumns}
              rows={users}
            />
          </div>
        </main>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default Usuarios;
