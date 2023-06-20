import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import imagemLogin from "./imagemLogin.png";
import SubComponenteLogin from "./subComponenteLogin/subComponenteLogin";
import SubComponenteCadastro from "./subComponenteCadastro/subComponenteCadastro";
import withRouter from "../resultadoPesquisa/withRouter";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registreseAtivado: false,
    };
    this.handleClickRegistrese = this.handleClickRegistrese.bind(this);
    this.handleClickAcesseSuaConta = this.handleClickAcesseSuaConta.bind(this);
  }

  handleClickRegistrese() {
    this.setState({ registreseAtivado: true });
  }

  handleClickAcesseSuaConta() {
    this.setState({ registreseAtivado: false });
  }

  render() {
    if(localStorage.getItem('token')!==null){
      this.props.navigate("/topoImagemMaisPesquisa")
    }
    return (
      <div className='divTudoLogin'>
        <div className='divQuadroTotal'>
          <div className='divQuadroEsquerdo'>
            <h1 className='h1TitlePaginaDeLogin'>Bem Vindo</h1>
            <div className='divComSpanLogin'>
              {!this.state.registreseAtivado ? (
                <div className='divAcesseSuaConta'>Acesse sua conta</div>
              ) : (
                  <Link
                    className='LinkAcesseSuaConta'
                    onClick={this.handleClickAcesseSuaConta}
                  >
                    <div className="divLinkAcesseSuaConta">
                    Acesse sua conta
                    </div>
                  </Link>
                
              )}
              <div className='divOu'>ou</div>
              {!this.state.registreseAtivado ? (
                <Link
                  className='linkRegistre-se'
                  onClick={() => {
                    this.handleClickRegistrese();
                  }}
                >
                  <div className='divRegistre-se'>Registre-se</div>
                </Link>
              ) : (
                <div className="divRegistreseButtonFalse">Registre-se</div>
              )}
            </div>
          </div>

          {!this.state.registreseAtivado ? (
            <SubComponenteLogin></SubComponenteLogin>
          ) : (
            <SubComponenteCadastro></SubComponenteCadastro>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
