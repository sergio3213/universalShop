import React, { useState, useEffect } from "react";
import "./maoComPresente.png";
import "./topoImagemMaisPesquisa.css";

import { actionCreator } from "../../redux/actions";
import { connect } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import PrimeiraDivTopo from "../primeiraDivTopo/primeiraDivTopo";
import Buscador from "../buscador/buscador";

function TopoImagemMaisPesquisa(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const [stringPesquisa, setStringPesquisa] = useState("");

  const [prevStringPesquisa, setPrevStringPesquisa] = useState("");

  const { dispatch } = props;

    const handleClickSearch = async (e) => {
    await navigate("/resultadoPesquisa");
    dispatch(actionCreator(document.querySelector(".inputDeBusca").value));
    if (stringPesquisa === prevStringPesquisa) {
      alert("Ops! parece que você já pesquisou isso.");
    }

    if (stringPesquisa === "") {
      alert("Digite o produto que você procura.");
    } else {
      setPrevStringPesquisa(stringPesquisa);
    }
  };

  return (
    <div className='divTotal'>
       
      <div className='tituloTopoH1DescubraUmMundo'>
        <h1 className='h1DescubraUmMundo'>
          Descubra um Mundo
          <br /> de Possibilidades em
          <br />
          <span className='spanEmNossaLojaOnline'>
            {" "}
            nossa loja UniversalShop
          </span>
        </h1>
      </div>
      <Buscador></Buscador>
    </div>
  );
}
const mapStateToProps = (state) => ({
  countState: state.count,
});

export default connect(mapStateToProps)(TopoImagemMaisPesquisa);
