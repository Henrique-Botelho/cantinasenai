import React from "react";
import imagemCantina from "../../assets/fundo.png";
import { DataGrid } from "@mui/x-data-grid";

import Header from "../../components/Header";

function Compras() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover"
  }

  const columns = [
    {field: "cliente", headerName: "Cliente", width: 200, editable: true},
    {field: "detalhe", headerName: "Detalhes", width: 100},
    {field: "datetime", headerName: "Data/Hora", width: 100},
    {field: "total", headerName: "Total", type: "number", width: 100},
  ]

  const rows = [
    {id: 1, cliente: "Henrique", detalhe: "Pão de queijo", datetime: "16/05/2023", total: 3},
  ]

  return(
    <div style={backgroundImageStyle} className="h-screen w-screen flex justify-center items-center">
      <Header />
      <div className="container bg-white rounded h-96">
        <DataGrid 
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel : {page: 0, pageSize: 10}
            }
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  )
}

export default Compras;