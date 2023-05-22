import React from "react";
import {Link} from 'react-router-dom'
import "./login.css";
import imagemLogin from "./imagemLogin.png";
import SubComponenteLogin from "./subComponenteLogin/subComponenteLogin";
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
              <Link className="linkRegistre-se"><div className="divRegistre-se">Registre-se</div></Link>
            </div>
            
          </div>

          <SubComponenteLogin></SubComponenteLogin>
        </div>
      </div>
    );
  }
}
export default Login;
