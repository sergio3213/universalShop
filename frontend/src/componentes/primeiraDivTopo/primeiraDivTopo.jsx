import React from 'react'
import iconeEmail from "./iconeEmail.png";
import iconeTelefone from "./telefoneIcone.png";
import iconeFacebook from "./facebookicone.png";
import iconeLinkedin from "./linkedinIcone.png";
import iconeGithub from "./githubIcone.png";
import { Link,useLocation,useNavigate } from "react-router-dom";

function PrimeiraDivTopo(){
      const navigate = useNavigate()
      const location = useLocation()
    return(
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
        <img
          src={iconeGithub}
          className='imgIconeGithub'
          alt='iconeGithub'
        ></img>
        {location.pathname===("/login")?<Link to='/topoImagemMaisPesquisa' className="LinkLogin">Home</Link>:<Link to='/login' className="LinkLogin">Login</Link>}
      </div>
    )    
}
export default PrimeiraDivTopo