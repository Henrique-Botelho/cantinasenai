import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Compras from "./Pages/Compras";

function RoutesApp() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/compras" element={<Compras/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;