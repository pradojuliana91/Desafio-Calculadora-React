import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #AAAAFF;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: 'Roboto';

  input {
    width: 100%;
    height: 100%;
    background-color: transparent; /* Transparente, pois a cor do fundo já está no contêiner */
    border: 0;
    text-align: right; /* Alinhamento do texto à direita */
    padding: 0 10px;
    font-size: 30px;
    font-family: 'Roboto';
    color: #FFFFFF;
  }
`;
