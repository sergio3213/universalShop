import React, { useEffect , useState} from "react";
import axios from "axios";
import Card from "./cards";
import "./novidades.css";

function Novidades(){
    const [ArrayNovidades, setArrayNovidades] = useState('')
    useEffect(()=>{
        axios
        .get(`http://localhost:3001/novidades`).then((data)=>setArrayNovidades(data.data))
    }, [])
    return(
        
        <div className="divTudoNovidades">
                <h1 className="h1Novidades">Novidades</h1>
                <div className="divTodosCardsDeProdutosNovidades">
                    {ArrayNovidades?ArrayNovidades.map((item, index) =>(
                        <Card
                        index={index}
                        itemImagem={item.imagem}
                        itemNome={item.nome}
                        itemDescricao={item.descricao}
                        itemPreco={item.preco}
                    ></Card>
                    ) ):''
                }
            </div>
        </div>
    )
}

export default Novidades