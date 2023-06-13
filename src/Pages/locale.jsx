const localePTBR = {
   // Root
   noRowsLabel: 'Tabela vazia',
   noResultsOverlayLabel: 'Nenhum resultado encontrado.',
 
   // Density selector toolbar button text
   toolbarDensity: 'Densidade',
   toolbarDensityLabel: 'Densidade',
   toolbarDensityCompact: 'Compacto',
   toolbarDensityStandard: 'Padrão',
   toolbarDensityComfortable: 'Confortável',
 
   // Columns selector toolbar button text
   toolbarColumns: 'Colunas',
   toolbarColumnsLabel: 'Selecionar colunas',
 
   // Filters toolbar button text
   toolbarFilters: 'Procurar',
   toolbarFiltersLabel: 'Mostrar filtros',
   toolbarFiltersTooltipHide: 'Esconder filtros',
   toolbarFiltersTooltipShow: 'Mostrar filtros',
   toolbarFiltersTooltipActive: (count) =>
     count !== 1 ? `${count} Ativar filtros` : `${count} Ativar filtro`,
 
   // Quick filter toolbar field
   toolbarQuickFilterPlaceholder: 'Procurar…',
   toolbarQuickFilterLabel: 'Procurar',
   toolbarQuickFilterDeleteIconLabel: 'Limpar',
 
   // Export selector toolbar button text
   toolbarExport: 'Exportar',
   toolbarExportLabel: 'Exportar',
   toolbarExportCSV: 'Download como CSV',
   toolbarExportPrint: 'Imprimir',
   toolbarExportExcel: 'Download como Excel',
 
   // Columns panel text
   columnsPanelTextFieldLabel: 'Encontrar coluna',
   columnsPanelTextFieldPlaceholder: 'Título da coluna',
   columnsPanelDragIconLabel: 'Reorganizar coluna',
   columnsPanelShowAllButton: 'Mostrar tudo',
   columnsPanelHideAllButton: 'Esconder tudo',
 
   // Filter panel text
   filterPanelAddFilter: 'Adicionar filtro',
   filterPanelRemoveAll: 'Remover tudo',
   filterPanelDeleteIconLabel: 'Deletar',
   filterPanelLogicOperator: 'Operador lógico',
   filterPanelOperator: 'Como procurar?',
   filterPanelOperatorAnd: 'E',
   filterPanelOperatorOr: 'Ou',
   filterPanelColumns: 'Coluna',
   filterPanelInputLabel: 'O que procurar?',
   filterPanelInputPlaceholder: 'O que deseja procurar',
 
   // Filter operators text
   filterOperatorContains: 'Contém',
   filterOperatorEquals: 'Igual',
   filterOperatorStartsWith: 'Começa com',
   filterOperatorEndsWith: 'Termina com',
   filterOperatorIs: 'é',
   filterOperatorNot: 'não é',
   filterOperatorAfter: 'está depois',
   filterOperatorOnOrAfter: 'está em ou depois',
   filterOperatorBefore: 'está antes',
   filterOperatorOnOrBefore: 'está em ou antes',
   filterOperatorIsEmpty: 'está vazio',
   filterOperatorIsNotEmpty: 'não está vazio',
   filterOperatorIsAnyOf: 'é qualquer um de',
   'filterOperator=': '=',
   'filterOperator!=': '!=',
   'filterOperator>': '>',
   'filterOperator>=': '>=',
   'filterOperator<': '<',
   'filterOperator<=': '<=',
 
   // Header filter operators text
   headerFilterOperatorContains: 'Contém',
   headerFilterOperatorEquals: 'Igual',
   headerFilterOperatorStartsWith: 'Começa com',
   headerFilterOperatorEndsWith: 'Termina com',
   headerFilterOperatorIs: 'É',
   headerFilterOperatorNot: 'Não é',
   headerFilterOperatorAfter: 'Está depois',
   headerFilterOperatorOnOrAfter: 'Está em ou depois',
   headerFilterOperatorBefore: 'Está antes',
   headerFilterOperatorOnOrBefore: 'Está em ou antes',
   headerFilterOperatorIsEmpty: 'Está vazio',
   headerFilterOperatorIsNotEmpty: 'Não está vazio',
   headerFilterOperatorIsAnyOf: 'É qualquer um de',
   'headerFilterOperator=': 'É igual',
   'headerFilterOperator!=': 'Não é igual',
   'headerFilterOperator>': 'Maior que',
   'headerFilterOperator>=': 'Maior que ou igual a',
   'headerFilterOperator<': 'Menor que',
   'headerFilterOperator<=': 'Menor que ou igual a',
 
   // Filter values text
   filterValueAny: 'qualquer',
   filterValueTrue: 'verdadeiro',
   filterValueFalse: 'falso',
 
   // Column menu text
   columnMenuLabel: 'Menu',
   columnMenuShowColumns: 'Mostrar colunas',
   columnMenuManageColumns: '', // Gerenciador de colunas desabilitado
   columnMenuFilter: 'Filtro',
   columnMenuHideColumn: 'Esconder coluna',
   columnMenuUnsort: 'Sem ordem',
   columnMenuSortAsc: 'Ordem crescente',
   columnMenuSortDesc: 'Ordem decrescente',
 
   // Column header text
   columnHeaderFiltersTooltipActive: (count) =>
     count !== 1 ? `${count} ativar filtros` : `${count} ativar filtro`,
   columnHeaderFiltersLabel: 'Mostrar filtros',
   columnHeaderSortIconLabel: 'Organizar',
 
   // Rows selected footer text
   footerRowSelected: (count) =>
     count !== 1
       ? `${count.toLocaleString()} Linhas selecionadas`
       : `${count.toLocaleString()} Linha selecionada`,
 
   // Total row amount footer text
   footerTotalRows: 'Total de linhas:',
 
   // Total visible row amount footer text
   footerTotalVisibleRows: (visibleCount, totalCount) =>
     `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
 
   // Checkbox selection text
   checkboxSelectionHeaderName: 'Caixa de seleção',
   checkboxSelectionSelectAllRows: 'Marcar todas as linhas',
   checkboxSelectionUnselectAllRows: 'Desmarcar todas as linhas',
   checkboxSelectionSelectRow: 'Marcar linha',
   checkboxSelectionUnselectRow: 'Desmarcar linha',
 
   // Boolean cell text
   booleanCellTrueLabel: 'sim',
   booleanCellFalseLabel: 'não',
 
   // Actions cell more text
   actionsCellMore: 'mais',
 
   // Column pinning text
   pinToLeft: 'Afixar à esquerda',
   pinToRight: 'Afixar à direita',
   unpin: 'Desafixar',
 
   // Tree Data
   treeDataGroupingHeaderName: 'Grupo',
   treeDataExpand: 'Ver elemento filho',
   treeDataCollapse: 'Esconder elemento filho',
 
   // Grouping columns
   groupingColumnHeaderName: 'Agrupar',
   groupColumn: (name) => `Agrupar pelo ${name}`,
   unGroupColumn: (name) => `Parar de agrupar pelo ${name}`,
 
   // Master/detail
   detailPanelToggle: 'Alternar painel de detalhes',
   expandDetailPanel: 'Expandir',
   collapseDetailPanel: 'Colapsar',
 
   // Used core components translation keys
   MuiTablePagination: {},
 
   // Row reordering text
   rowReorderingHeaderName: 'Reordenação de linha',
 
   // Aggregation
   aggregationMenuItemHeader: 'Agregação',
   aggregationFunctionLabelSum: 'soma',
   aggregationFunctionLabelAvg: 'média',
   aggregationFunctionLabelMin: 'mínimo',
   aggregationFunctionLabelMax: 'máximo',
   aggregationFunctionLabelSize: 'tamanho',
}

export default localePTBR;