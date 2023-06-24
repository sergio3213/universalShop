import React from "react";
import './rodape.css'
import facebookIcone from "./facebookicone.png"
import linkedinIcone from './linkedinIcone.png'
import githubIconeIcone from './githubIcone.png'
import emailIcone from './iconeEmail.png'


function Rodape(){
    return(
        <div className="tudoRodapeTopoImagemMaisPesquisa">
            <div className="iconesRodape">
                <img src={facebookIcone} className="imgFacebookIconeRodape"></img>
                <img src={linkedinIcone} className="imgLinkedinIconeRodape"></img>
                <img src={githubIconeIcone} className="imgGithubIconeRodape"></img>
                <img src={emailIcone} className="imgEmailIconeRodape"></img>
            </div>

            <div>sergiomelo.desenvolvedor@gmail.com</div>
        </div>
    )
}

export default Rodape