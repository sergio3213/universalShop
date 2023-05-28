import React from "react";
import "./subComponenteCadastro.css";
import axios from 'axios'
class SubComponenteCadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome:'',
      email:'',
      senha:'',
    };
  
  this.enviaRequisicaoCriarCadastro = this.enviaRequisicaoCriarCadastro.bind(this)
    
  }

  enviaRequisicaoCriarCadastro(){
    const{nome,email,senha} = this.state
    const data={nome, email,senha}

    axios.post(`http://localhost:3001/criarCadastro`,data).then((data)=>{

    })  
  }
  render() {
    
    return (
      <div className='divTudoComponenteCadastrese'>
        <div className="divH1CadastreseTitle">
          <h1 className='h1CadastreseTitle'>Cadastre-se</h1>
        </div>

        <div className="divInputNomeCadastrese">
          <input type="text" className="inputNomeCadastrese" placeholder="Nome" onChange={(e)=>this.setState(()=>({nome:e.target.value,}))}></input>
        </div>
        <div className="divInputEmailCadastrese">
          <input type="text" className="inputEmailCadastrese" placeholder="E-mail" onChange={(e)=>this.setState(()=>({email:e.target.value,}))}></input>
        </div>

        <div className="divInputSenhaCadastrese">
          <input type="password" className="inputSenhaCadastrese" placeholder="Senha" onChange={(e)=>this.setState(()=>({senha: e.target.value,}))}></input>
        </div>

        
        <div className="divButtonCadastrese">
          <button className="buttonCadastrese" onClick={this.enviaRequisicaoCriarCadastro}>Cadastre-se</button>
        </div>


      </div>
    );
  }
}

export default SubComponenteCadastro;
