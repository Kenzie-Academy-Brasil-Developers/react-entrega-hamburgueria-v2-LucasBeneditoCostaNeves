import React, { ReactNode } from "react";
import { Itens } from "../Itens";
import { Ul } from "./stye";

interface iElement {
  dados: {
    category: string;
    id: number;
    img: string;
    name: string;
    price: number;
  };
}

interface iMap{
  map: ReactNode;
}

export function Lista({ dados }: iElement) {
  return <Ul>{dados && dados.map((element: iElement) => Itens(element))}</Ul>;
}
