import React from "react";
import "./login.css";
import imagemLogin from "./imagemLogin.png";
class Login extends React.Component {
  render() {
    return (
      <div className='divTudoLogin'>
        <div className="divQuadroTotal">
          <div className='divQuadroEsquerdo'>
            <h1 className='h1TitlePaginaDeLogin'>Bem Vindo</h1>
            <div className="divComSpanLogin">
              <div className="divAcesseSuaConta">Acesse sua conta</div>
              <div className="divOu">
                ou
              </div>
              <div className="divRegistre-se">Registre-se</div>
            </div>
            
          </div>

          <div className='divTotalComInputs'>sdff</div>
        </div>
      </div>
    );
  }
}
export default Login;
