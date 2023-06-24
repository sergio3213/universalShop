import React from 'react';


class Card extends React.Component{
    render(){
        return(
            
            <div key={this.props.index} className={`divTotalProdutoNovidades${this.props.index}`}>
              <div key={`divImagemNovidades${this.props.index}`} className={`divImagemNovidades${this.props.index}`}>
                {
                  <img
                    className={`imgNovidades${this.props.index}`}
                    alt='imagem'
                    src={require(`../../resultadoPesquisa${this.props.itemImagem.slice(1)}`)}
                  ></img>
                }
              </div>
              <div key={`divNome${this.props.index}`} className={`divNomeNovidades${this.props.index}`}>
                {this.props.itemNome}
              </div>
              <div
                key={`divDescricao${this.props.index}`}
                className={`divDescricaoNovidades${this.props.index}`}
              >
                {this.props.itemDescricao}
              </div>
              <div key={`divPreco${this.props.index}`} className={`divPrecoNovidades${this.props.index}`}>
                {`R$ ${this.props.itemPreco.toFixed(2)}`}
              </div>
              <div
                className={`divAddAoCarrinhoNovidades${this.props.index}`}
                key={`divAddAoCarrinho${this.props.index}`}
              >
                {
                  <button
                    key={`buttonAddAoCarrinho${this.props.index}`}
                    className={`buttonAddAoCarrinhoNovidades${this.props.index}`}
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