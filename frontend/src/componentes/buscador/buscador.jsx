import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreator } from "../../redux/actions";
import './buscador.css'
import ResultadoPesquisa from "../resultadoPesquisa/resultadoPesquisa";

 function Buscador(props) {
    const navigate = useNavigate();
    const [stringPesquisa, setStringPesquisa] = useState('');
  const [prevStringPesquisa, setPrevStringPesquisa] = useState('');
  let [contador, setContador] = useState(0);
    const handleClickSearch = async (e)=> {
    
      await navigate('/resultadoPesquisa')
      await setContador(contador+=1)
        await dispatch(
          actionCreator(stringPesquisa,props.contadorClickButton)
        );
        if(stringPesquisa===''){
          alert("Digite o produto que você procura.")
        }
    
              }
      const { dispatch, countState } = props;
        return(
            <div className='divInputDeBusca'>
          <input
            className='inputDeBusca'
            placeholder='Encontre o que deseja...'
            type='text'
            onChange={(e)=>setStringPesquisa(e.target.value)}
          ></input>
          <button
            className='buttonDeBusca'
            onClick={(e) => {
              handleClickSearch();
            }}
          ></button>
        </div>
        )
    }

    const mapStateToProps = (state) => ({
        countState: state.count,
        contadorClickButton: state.contadorClickButton
      });

    export default connect(mapStateToProps)(Buscador);