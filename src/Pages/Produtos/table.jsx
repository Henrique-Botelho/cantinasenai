import React from "react";
import { Link } from "react-router-dom";

const produtosColumns = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.166,
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
  },
  {
    field: "nome",
    headerName: "Nome",
    flex: 0.166,
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    valueFormatter: (params) => params.value[0].toUpperCase() + params.value.slice(1)
  },
  {
    field: "categoria",
    headerName: "Categoria",
    flex: 0.166,
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
  },
  {
    field: "descricao",
    headerName: "Descrição",
    flex: 0.166,
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
    valueFormatter: (params) => `${params.value[0].toUpperCase() + params.value.slice(1)}.`
  },
  {
    field: "preco",
    headerName: "Preço",
    type: "number",
    flex: 0.166,
    valueFormatter: (params) => `R$ ${params.value.toFixed(2).replace('.', ',')}`,
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
  },
  {
    field: "actions",
    headerName: "Ações",
    type: "actions",
    flex: 0.166,
    renderCell: (params) => (
      <div className="flex justify-center items-center gap-2">
        <Link to="/edita-produto" state={params.row} className="flex justify-center items-center p-2 rounded bg-yellow-400">Editar</Link>
        <Link to="/edita-produto" state={params.row} className="flex justify-center items-center p-2 rounded bg-red-400">Excluir</Link>
      </div>
    ),
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
  }
]

export default produtosColumns;