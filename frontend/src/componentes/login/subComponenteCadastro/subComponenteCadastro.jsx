import React from "react";
import "./subComponenteCadastro.css";
class SubComponenteCadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='divTudoComponenteCadastrese'>
        <div className="divH1CadastreseTitle">
          <h1 className='h1CadastreseTitle'>Cadastre-se</h1>
        </div>
      </div>
    );
  }
}

export default SubComponenteCadastro;
