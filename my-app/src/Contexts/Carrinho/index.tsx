import React, { useState } from "react";
import { createContext } from "react";
import { api } from "../../Service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { iDados } from "../Hamburgueria";

interface iContextoCarrinhoProps {
  children: React.ReactNode;
}

export const ContextoCarrinho = createContext({});

export function FunçoesDeCarrinho({ children }: iContextoCarrinhoProps) {
  const [itemCarrinho, definirItemCarrinho] = useState<iDados[]>([]);
  const [ valorTotal, definirValorTotal ] = useState(0)
  const [ abrirModalCarrinho, definirModalCarrinho ] = useState(false)
  console.log(valorTotal)

  function adicionarAoCarrinho(item: iDados) {
    definirItemCarrinho([...itemCarrinho, item]);
  }

  function removerDoCarrinho(nome: string) {
    const filtro = itemCarrinho.filter((element) => element.name !== nome);
    definirItemCarrinho(filtro);
  }

  function removerTodoCarrinho() {
    definirItemCarrinho([]);
    window.location.reload()
  }

  function somarValor(element){
    definirValorTotal(valorTotal + element.price);
  }

  function subtrairValor(element){
    definirValorTotal(valorTotal - element.price);
  }

  return (
    <ContextoCarrinho.Provider
      value={{ itemCarrinho, definirItemCarrinho, adicionarAoCarrinho, removerDoCarrinho, removerTodoCarrinho, valorTotal, definirValorTotal, somarValor, subtrairValor }}
    >
      {children}
    </ContextoCarrinho.Provider>
  );
}
