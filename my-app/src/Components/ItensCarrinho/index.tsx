import React, { useContext, useState } from "react";
import { ContextoCarrinho } from "../../Contexts/Carrinho";
import { Container } from "./style";

export function ItensCarrinho(element) {
    const { removerDoCarrinho, valorTotal, definirValorTotal, somarValor, subtrairValor  } = useContext(ContextoCarrinho)
    // const [ quantidade, definirQuantidade ]  = useState(true)
    // const [ teste, definirTeste ] = useState(1)

    function adicionarQuantidade(element){
        somarValor(element)
    }

    function diminuirQuantidade(element){
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
              <p className="quantidade">asa</p>
              <button className="botao" onClick={() => adicionarQuantidade(element)}>+</button>
            </div>
          </div>
        </div>
        <h2 className="lixeira">Lucas</h2>
      </div>
    </Container>
  );
}
