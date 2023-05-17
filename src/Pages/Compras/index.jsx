import React, { useState } from "react";
import imagemCantina from "../../assets/fundo.png";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Modal } from "@mui/material";

import Header from "../../components/Header";

function Compras() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };

  const columns = [
    {
      field: "cliente",
      headerName: "Cliente",
      flex: 0.2,
      hideable: false,
      description: "Nome do cliente que realizou a compra.",
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "detalhe",
      headerName: "Detalhes",
      flex: 0.2,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "datetime",
      headerName: "Data/Hora",
      flex: 0.2,
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      flex: 0.2,
      valueFormatter: (params) => {
        if (params.value == null) {
          return "";
        }
        return `R$ ${params.value.toFixed(2).replace(".", ",")}`;
      },
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
    {
      field: "actions",
      headerName: "Ações",
      type: "actions",
      flex: 0.2,
      renderCell: (params) => (
        <button
          onClick={() => {
            setCliente(params.row.cliente);
            setDetalhes(params.row.detalhe);
            setDatahora(params.row.datetime);
            setTotal(params.row.total.toFixed(2).replace(".", ","));
            handleOpen();
          }}
          className="bg-blue-400 text-gray-100 text-sm w-16 h-8 rounded"
        >
          Detalhes
        </button>
      ),
      hideable: false,
      renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    },
  ];

  const rows = [
    {
      id: 1,
      cliente: "Henrique de Moraes Botelho da Silva",
      detalhe: "Pão de queijo",
      datetime: "16/05/2023",
      total: 3,
    },
    {
      id: 2,
      cliente: "Heitor",
      detalhe: "Café",
      datetime: "20/03/2023",
      total: 2,
    },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cliente, setCliente] = useState("");
  const [detalhes, setDetalhes] = useState("");
  const [datahora, setDatahora] = useState("");
  const [total, setTotal] = useState("");

  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-gray-100 flex justify-center items-center flex-col rounded">
          <h2
            id="modal-title"
            className="w-full h-1/3 my-5 flex justify-center pl-3 opacity-95 items-center text-lg font-bold"
          >
            Detalhes da compra
          </h2>
          <div
            id="modal-description"
            className="w-full h-2/3 pl-3 flex justify-center flex-col items-start gap-3 mb-3"
          >
            <h3 className="font-bold opacity-75">Cliente</h3>
            <span className="pl-3">{cliente}</span>
            <h3 className="font-bold opacity-75">Detalhes</h3>
            <span className="pl-3">{detalhes}</span>
            <h3 className="font-bold opacity-75">Data/Hora</h3>
            <span className="pl-3">{datahora}</span>
            <h3 className="font-bold opacity-75">Total</h3>
            <span className="pl-3">R$ {total}</span>
          </div>
        </div>
      </Modal>

      <div className="container bg-white rounded h-96">
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default Compras;
