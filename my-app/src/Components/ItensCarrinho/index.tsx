import React, { useContext, useState } from "react";
import { ContextoCarrinho } from "../../Contexts/Carrinho";
import img from "../../imgs/lixeira.png"
import { Container } from "./style";

export function ItensCarrinho(element: any) {
    const { removerDoCarrinho, valorTotal, definirValorTotal, somarValor, subtrairValor  } = useContext(ContextoCarrinho)
    // const [ quantidade, definirQuantidade ]  = useState(true)
    // const [ teste, definirTeste ] = useState(1)

    function adicionarQuantidade(element: any){
        somarValor(element)
    }

    function diminuirQuantidade(element: any){
        // if(quantidade == 1){
            // removerDoCarrinho(element.name)
        // } else{
            subtrairValor(element)
        // }
    }

  return (
    <Container>
      <div className="flex">
        <div className="info">
          <img className="img" src={element.img} alt="" />
          <div className="coluna">
            <p className="nome">{element.name}</p>
            <div className="divBotoes">
              <button className="botao" onClick={() => diminuirQuantidade(element)} >-</button>
              <p className="quantidade">0</p>
              <button className="botao" onClick={() => adicionarQuantidade(element)}>+</button>
            </div>
          </div>
        </div>
        <img src={img} className="lixeira" onClick={() => removerDoCarrinho(element.name)}></img>
      </div>
    </Container>
  );
}
