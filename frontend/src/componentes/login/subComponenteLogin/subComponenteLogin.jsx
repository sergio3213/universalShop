import React from "react";
import axios from "axios";
import "./subComponenteLogin.css";
import withRouter from "../../resultadoPesquisa/withRouter";
class SubComponenteLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: "",
      inputSenha: "",
    };
    this.clickButtonEnviaRequisicaoLogin =
      this.clickButtonEnviaRequisicaoLogin.bind(this);

    this.handleInputEmail = this.handleInputEmail.bind(this);

    this.handleInputSenha = this.handleInputSenha.bind(this);
  }
  
  async clickButtonEnviaRequisicaoLogin() {
    if (this.state.inputEmail === "") {
      alert("Digite seu E-mail");
    } else if (this.state.inputSenha === "") {
      alert("Digite sua senha");
    } else {
      try {
        const res = await axios.get(`http://localhost:3001/login`, {
          params: {
            email: this.state.inputEmail,
            senha: this.state.inputSenha,
          },
        });

        await localStorage.setItem("token",res.data);
        this.props.navigate("/topoImagemMaisPesquisa")
      } catch (err) {
        alert(JSON.parse(err.request.response).message);
      }
    }
  }

  async handleInputEmail(e) {
    await this.setState(() => ({ inputEmail: e.target.value }));
  }

  async handleInputSenha(e) {
    await this.setState(() => ({ inputSenha: e.target.value }));
  }

  render() {
    return (
      <div className='divTotalComInputs'>
        <div className='divH1TitleLogin'>
          <h1 className='h1LoginTitle'>Login</h1>
        </div>

        <div className='divInputUsuarioLogin'>
          <input
            type='text'
            className='inputUsuarioLogin'
            placeholder='E-mail'
            onChange={this.handleInputEmail}
          ></input>
        </div>

        <div className='divInputSenhaLogin'>
          <input
            type='password'
            className='inputSenhaLogin'
            placeholder='Senha'
            onChange={this.handleInputSenha}
          ></input>
        </div>

        <div className='divButtonLogin'>
          <button
            className='buttonLogin'
            onClick={this.clickButtonEnviaRequisicaoLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SubComponenteLogin);
