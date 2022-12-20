import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Carrinho } from "../../Components/Carrinho";
import { Lista } from "../../Components/Lista";
import { Logo } from "../../Components/Logo";
import { ModalCarrinho } from "../../Components/ModalCarrinho";
import { ContextoHamburgueria } from "../../Contexts/Hamburgueria";
import { Container } from "./style";

export function PaginaDaDashboard() {
  const { protejerRotas, dados } = useContext(ContextoHamburgueria);


  useEffect(() => {
    protejerRotas();
  }, []);

  return (
    <Container>
      <Logo />
      {dados && <Lista dados={dados} />}
      <Carrinho/>
      <ToastContainer autoClose={1000} position={"top-center"} className='toast' />
      <ModalCarrinho/>
    </Container>
  );
}
