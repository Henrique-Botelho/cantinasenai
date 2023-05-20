import React from "react";

import imagemCantina from "../../assets/fundo.png";
import { VscLoading } from "react-icons/vsc";

import Header from "../../components/Header";

function Loading() {
  const backgroundImageStyle = {
    backgroundImage: `url('${imagemCantina}')`,
    backgroundSize: "cover",
  };


  return (
    <div
      style={backgroundImageStyle}
      className="h-screen w-screen flex justify-center items-center"
    >
      <Header />
      <VscLoading size={80} className="text-blue-300 animate-spin" />

    </div>
  );
}

export default Loading;
