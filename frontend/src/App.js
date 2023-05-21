import React,{useEffect} from "react";
import "./App.css";
import TopoImagemMaisPesquisa from "./componentes/topoImagensMaisPesquisa/topoImagemMaisPesquisa";
import { BrowserRouter, Route, Link, Routes,useLocation,useNavigate } from "react-router-dom";
import ResultadoPesquisa from "./componentes/resultadoPesquisa/resultadoPesquisa";
import ComponenteContador from "./componentes/contador/contador";
import Login from "./componentes/login/login";
import Buscador from "./componentes/buscador/buscador";
import PrimeiraDivTopo from "./componentes/primeiraDivTopo/primeiraDivTopo";


function RedirecionaParaComponente(){
  
  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (location.pathname === "/") {
      // aqui estou falando que quando atualizar a pagina é para se manter na rota que estava
      navigate("/topoImagemMaisPesquisa");
    } else {
      navigate(location.pathname);
    }
  }, []);
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <PrimeiraDivTopo></PrimeiraDivTopo>
        <RedirecionaParaComponente></RedirecionaParaComponente>
      </div>
      <div className='divResultadoPesquisa'>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/topoImagemMaisPesquisa' element={<TopoImagemMaisPesquisa />}></Route>
          
          <Route path='/busca' element={<Buscador />}></Route>
          <Route
            path='/resultadoPesquisa'
            element={<ResultadoPesquisa />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
