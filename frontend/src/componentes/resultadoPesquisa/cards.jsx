import React from 'react';
import "./resultadoPesquisa.css";
  
class Card extends React.Component{
    render(){
        return(
            
            <div key={this.props.index} className={`divTotalProduto${this.props.index}`}>
              <div key={`divImagem${this.props.index}`} className={`divImagem${this.props.index}`}>
                {
                  <img
                    className={`img${this.props.index}`}
                    alt='imagem'
                    src={require(`${this.props.itemImagem}`)}
                  ></img>
                }
              </div>
              <div key={`divNome${this.props.index}`} className={`divNome${this.props.index}`}>
                {this.props.itemNome}
              </div>
              <div
                key={`divDescricao${this.props.index}`}
                className={`divDescricao${this.props.index}`}
              >
                {this.props.itemDescricao}
              </div>
              <div key={`divPreco${this.props.index}`} className={`divPreco${this.props.index}`}>
                {`R$ ${this.props.itemPreco.toFixed(2)}`}
              </div>
              <div
                className={`divAddAoCarrinho${this.props.index}`}
                key={`divAddAoCarrinho${this.props.index}`}
              >
                {
                  <button
                    key={`buttonAddAoCarrinho${this.props.index}`}
                    className={`buttonAddAoCarrinho${this.props.index}`}
                  >
                    {" "}
                    Adicionar ao Carrinho
                  </button>
                }
              </div>
            </div>

        )
    }
}

export default Card