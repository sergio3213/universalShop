import React, { useEffect, useState } from "react";
import iconeEmail from "./iconeEmail.png";
import iconeTelefone from "./telefoneIcone.png";
import iconeFacebook from "./facebookicone.png";
import iconeLinkedin from "./linkedinIcone.png";
import iconeGithub from "./githubIcone.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./primeiraDivTopo.css";

function PrimeiraDivTopo() {
  const [nomeUser, setNomeUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setNomeUser(jwt_decode(localStorage.getItem("token")).nome.split(" ")[0]);
    }
  }, [setNomeUser, localStorage.getItem("token")]);

  const location = useLocation();
  return (
    <div className='primeiraDivTopo'>
      <img className='imgEconeEmail' src={iconeEmail} alt='iconeEmail'></img>
      <span className='spanEmail'>sergiomelo.desenvolvedor@gmail.com</span>

      <img
        className='imgIconeTelefone'
        src={iconeTelefone}
        alt='iconeTelefone'
      ></img>
      <span className='spanTelefone'>+55 (11) 96529-9326</span>
      <img
        className='imgIconeFacebook'
        src={iconeFacebook}
        alt='iconeFacebook'
      ></img>
      <img
        className='imgIconeLinkedin'
        src={iconeLinkedin}
        alt='iconeLinkedin'
      ></img>
      <img src={iconeGithub} className='imgIconeGithub' alt='iconeGithub'></img>
      {localStorage.getItem("token") !== null ? (
        <div className='divMenuNomeJWT'>
          <ul className='ulMenuRolavelPerfil'>
            <li className='liNome'>
              <Link>{nomeUser}</Link>
              <div className='setaParaBaixo'></div>
            </li>
            <li className='liCompras'>{"Compras"}</li>
            <li className='liVendas'>{"Vendas"}</li>
            <li className='liLogout'>{"Log out"}</li>
          </ul>
        </div>
      ) : (
        ""
      )}

      {location.pathname !== "/topoImagemMaisPesquisa" ? (
        nomeUser ? (
          <Link to='/topoImagemMaisPesquisa' className='linkHomeLogin'>
            Home
          </Link>
        ) : (
          <Link to='/topoImagemMaisPesquisa' className='linkHomeLoginCaseLoginNotExist'>
            Home
          </Link>
        )
      ) : localStorage.getItem("token") === null ? (
        <Link to='/login' className='LinkLogin'>
          Login
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
export default PrimeiraDivTopo;
