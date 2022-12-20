import React, { useContext, useState } from "react";
import { ContextoCarrinho } from "../../Contexts/Carrinho";
import { ItensCarrinho } from "../ItensCarrinho";
import { Container } from "./style";

export function ModalCarrinho() {
  const { itemCarrinho, valorTotal, removerTodoCarrinho } =
    useContext(ContextoCarrinho);

  if (itemCarrinho.length > 0) {
    return (
      <Container>
        <div className="divP">
          <p className="pCarrinho">Carrinho de Compras</p>
        </div>
        <div className="essa">{itemCarrinho.map((element) => ItensCarrinho(element))}</div>
        <div className="divValor">
          <span className="spanTotal">Total:</span>
          <span className="valor">{valorTotal}</span>
        </div>
        <button className="botaoRemover" onClick={() => removerTodoCarrinho()}>
          Remover Todos os Itens
        </button>
      </Container>
    );
  } else {
    return <div></div>;
  }
}
