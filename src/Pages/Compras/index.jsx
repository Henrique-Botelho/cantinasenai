import React from "react";
import imagemCantina from "../../assets/fundo.png";

import Header from "../../components/Header";

function Compras() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover"
  }

  return(
    <div style={backgroundImageStyle} className="h-screen w-screen flex justify-center items-center">
      <Header />
    </div>
  )
}

export default Compras;