import React from 'react'
import './subComponenteLogin.css'
class SubComponenteLogin extends React.Component{

    render(){
        return(
            <div className='divTotalComInputs'>
                <div className="divH1TitleLogin">
                    <h1 className="h1LoginTitle">Login</h1>
                </div>

                <div className="divInputUsuarioLogin">
                   <input type="text" className="inputUsuarioLogin" placeholder="Username"></input> 
                </div>

                <div className="divInputSenhaLogin">
                    <input type="password" className="inputSenhaLogin" placeholder="Senha"></input> 
                </div>

                <div className="divButtonLogin">
                    <button className="buttonLogin">Login</button>
                </div>
            </div>
        )
    }
}

export default SubComponenteLogin