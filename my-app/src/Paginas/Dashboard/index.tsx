import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Carrinho } from "../../Components/Carrinho";
import { Lista } from "../../Components/Lista";
import { Logo } from "../../Components/Logo";
import { ModalCarrinho } from "../../Components/ModalCarrinho";
import { ContextoCarrinho } from "../../Contexts/Carrinho";
import { ContextoHamburgueria } from "../../Contexts/Hamburgueria";
import { Container } from "./style";

export function PaginaDaDashboard() {
  const { protejerRotas, dados } = useContext(ContextoHamburgueria);
  const { definirModalCarrinho } = useContext(ContextoCarrinho)

  useEffect(() => {
    protejerRotas();
  }, []);

  return (
    <Container>
      <div className="divTopLogo">
        <Logo />
        <div>
          <input type="text" name="" id="" />
          <span onClick={() => definirModalCarrinho(true)}>carrinho</span>
          <span
            onClick={() => {
              localStorage.removeItem("@Token");
              protejerRotas();
            }}
          >
            sair
          </span>
        </div>
      </div>

      {dados && <Lista dados={dados} />}
      <Carrinho />
      <ToastContainer
        autoClose={1000}
        position={"top-center"}
        className="toast"
      />
      <ModalCarrinho />
    </Container>
  );
}
