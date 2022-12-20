import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  position: absolute;
  background-color: var(--branco);
  top: 20px;
  right: 7%;
  padding-bottom: 28px;

  .divP {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: var(--verde);
    border-radius: 8px 8px 0px 0px;
  }

  .pCarrinho{
    margin-left: 20px;
    font-size: 18px;
    color: var(--branco);
  }

  .lixeira{
    margin: 21px 13px;
  }

  .divValor{
    display: flex;
    justify-content: space-between;

    width: 87%;

    margin: 0 auto;

    border-top: 2px solid var(--cinza-100);
  }

  .spanTotal{
    margin: 15px 0px;
  }

  .valor{
    margin: 20px 0px;
  }


  .botaoRemover{
    width: 87%;
    margin: 0 auto;
    display: table;
    background-color: var(--cinza-100);
    border: none;
    height: 50px;
    border-radius: 6px;
  }
`;
