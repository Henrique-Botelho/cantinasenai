const comprasColumns = [
  {
    field: "nome",
    headerName: "Cliente",
    flex: 0.25,
    hideable: false,
    description: "Nome do cliente que realizou a compra.",
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
  },
  {
    field: "compra",
    headerName: "Detalhes",
    flex: 0.25,
    hideable: false,
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
  },
  {
    field: "dataHora",
    headerName: "Data/Hora",
    flex: 0.25,
    hideable: false,
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
  },
  {
    field: "total",
    headerName: "Total",
    type: "number",
    flex: 0.25,
    valueFormatter: (params) => {
      if (params.value == null) {
        return "";
      }
      return `R$ ${params.value.toFixed(2).replace(".", ",")}`;
    },
    hideable: false,
    renderHeader: (params) => <strong>{params.colDef.headerName}</strong>,
  }
];

export default comprasColumns;