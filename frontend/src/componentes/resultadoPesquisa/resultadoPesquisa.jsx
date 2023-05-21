import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./resultadoPesquisa.css";
import { Link } from "react-router-dom";
import Card from "./cards";
import Buscador from "../buscador/buscador";
import TopoImagemMaisPesquisa from "../topoImagensMaisPesquisa/topoImagemMaisPesquisa";

class ResultadoPesquisa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagensExist: undefined,
      respostaAxiosSearchProducts: undefined,
      mapProdutos: [],
      indiceMinimo: 0,
      indiceMaximo: 7,
      indicePaginaQueEstou: 1,
    };

    this.handleProximosResultados = this.handleProximosResultados.bind(this);
    this.handleResultadosAnteriores = this.handleResultadosAnteriores.bind(this);
    this.verificaSeTermoJaFoiPesquisado =
      this.verificaSeTermoJaFoiPesquisado.bind(this);
  }

  verificaSeTermoJaFoiPesquisado(resultSearch, prevProps) {
    if (resultSearch === prevProps.resultSearch) {
      console.log(resultSearch, prevProps.resultSearch);
    }
  }


  componentDidUpdate(prevProps, prevState) {
   
    const { resultSearch,contadorClickButton } = this.props;
    if(resultSearch === prevProps.resultSearch && contadorClickButton !== prevProps.contadorClickButton){
      this.setState(() => ({ indiceMinimo: 0, indiceMaximo: 7, indicePaginaQueEstou:1 }));
      
    }

    if (resultSearch !== prevProps.resultSearch && contadorClickButton !== prevProps.contadorClickButton) {
      this.setState(() => ({ indiceMinimo: 0, indiceMaximo: 7 }));
    }

    

    if (
      (resultSearch !== prevProps.resultSearch && contadorClickButton !== prevProps.contadorClickButton ||
        this.state.indiceMinimo !== prevState.indiceMinimo) &&
      resultSearch !== ""
    ) {
      axios
        .get(`http://localhost:3001/searchProducts?search=${resultSearch}`)
        .then((data) => {
          this.setState(
            (prevState) => ({ respostaAxiosSearchProducts: data }),
            () => {
              this.setState(() => ({
                mapProdutos: this.mapNaRespostaDaPesquisa(),
              }));
            }
          );
        });
    }
  }

  mapNaRespostaDaPesquisa = () => {
    return this.state.respostaAxiosSearchProducts.data.map((item, index) => {
      if (
        index >= this.state.indiceMinimo &&
        index <= this.state.indiceMaximo
      ) {
        return (
          <Card
            index={index - this.state.indiceMinimo}
            itemImagem={item.imagem}
            itemNome={item.nome}
            itemDescricao={item.descricao}
            itemPreco={item.preco}
          ></Card>
        );
      }
    });
  };

  async handleProximosResultados() {
    await this.setState((prevState) => ({
      indiceMinimo: prevState.indiceMinimo + 8,
      indiceMaximo: prevState.indiceMaximo + 8,
      
    }));
    if(this.state.indicePaginaQueEstou < this.state.respostaAxiosSearchProducts.data.length / 8){
      await this.setState((prevState) => ({
        indicePaginaQueEstou:prevState.indicePaginaQueEstou+1,
      }));
    }
    console.log(this.state.mapProdutos);
  }


  async handleResultadosAnteriores() {
    if(this.state.indiceMaximo !== 7){
    await this.setState((prevState) => ({
        indiceMinimo: prevState.indiceMinimo - 8,
        indiceMaximo: prevState.indiceMaximo - 8,
      
    }));

    }
    if(this.state.indicePaginaQueEstou !== 0){
      await this.setState((prevState) => ({
        indicePaginaQueEstou: prevState.indicePaginaQueEstou-1,
      }));
    }
    console.log(this.state.mapProdutos);
  }

  render() {
    return (
      
      <div>
        <div style={{position:"relative",top:'-10vh',}}>
          <Buscador></Buscador>
        </div>
        <div className='divTitleResultadoPesquisa'>
          <h1>Resultado pesquisa:</h1>
        </div>
        <div className='divTodosCardsDeProdutos'>
          {this.state.respostaAxiosSearchProducts !== undefined
            ? this.state.mapProdutos
            : ""}
        </div>
        {this.state.respostaAxiosSearchProducts &&
        this.state.respostaAxiosSearchProducts.data.length >= 7 ? (
          
           <div className="divLinkListaAnteriorElistaProximoProdutos">
            {this.state.indicePaginaQueEstou!==1?<Link onClick={this.handleResultadosAnteriores}> {"<"} Anterior</Link>:''}
            {" "} {this.state.indicePaginaQueEstou} de {" "}
             {Math.ceil(this.state.respostaAxiosSearchProducts.data.length / 8)}{" "}
            {Math.ceil(this.state.respostaAxiosSearchProducts.data.length / 8)!==this.state.indicePaginaQueEstou?<Link onClick={this.handleProximosResultados}> Seguinte {">"}</Link>:''}
           </div>
          
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  resultSearch: state.resultSearch,
  contadorClickButton: state.contadorClickButton
});

export default connect(mapStateToProps)(ResultadoPesquisa);
