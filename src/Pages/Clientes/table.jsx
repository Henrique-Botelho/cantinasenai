import { Link } from "react-router-dom";

const clientesColumns = [
  {
    field: "nome",
    headerName: "Nome",
    flex: 0.33,
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
  },
  {
    field: "numero",
    headerName: "Telefone",
    flex: 0.33,
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
  },
  {
    field: "actions",
    headerName: "Ações",
    type: "actions",
    flex: 0.33,
    renderCell: (params) => (
      <Link to="/edita-cliente" state={params.row} className="flex justify-center items-center p-2 rounded bg-yellow-400">Editar</Link>
    ),
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>
  }
]

export default clientesColumns;