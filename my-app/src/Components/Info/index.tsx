import React from "react";
import { Logo } from "../Logo";
import { Container } from "./style";

export function Info(){
  return (
    <Container className='div40'>
        <Logo/>
      <div className="info">
        <img src='' alt="" />
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os melhores
          ingredientes.
        </p>
      </div>
    </Container>
  );
}
