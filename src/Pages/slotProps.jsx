const configFilterPanel = {
  filterPanel: {
    sx: {
      width: 300
    },
    filterFormProps: {
      deleteIconProps: {
        sx: {
          backgroundColor: "#F87171",
          borderRadius: 1,
          color: "white"
        },
      },
      sx: {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        gap: 3
      },
      columnInputProps: {
        sx: {
          width: '100%'
        }
      },
      operatorInputProps: {
        sx:{
          width:'100%'
        } 
      },
      valueInputProps: {
        sx:{
          width:'100%'
        }
      }
    }
  }
}
export default configFilterPanel;