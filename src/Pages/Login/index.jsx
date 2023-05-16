import React from "react";

function Login() {
  return(
    <div className="">
      <div>
        <h1>Cantina SENAI</h1>
        <span>Faça login abaixo</span>
      </div>
      <form>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <button>Entrar</button>
      </form>
    </div>
  )
}

export default Login;