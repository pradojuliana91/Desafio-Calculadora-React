import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FFB6C1; /* Cor de fundo */
`;

export const Content = styled.div`
  width: 400px;
  background-color: #fff;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
`;

export const EqualButton = styled.button`
  width: 100%; /* Ocupa a largura total */
  height: 75px;
  background-color: #00aaff;
  font-size: 24px;
  font-family: 'Roboto';
  color: #FFFFFF;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #4b0082; /* Um roxo para contraste */
  text-align: center;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #5a5a5a; /* Um cinza suave */
  text-align: center;
  margin-bottom: 20px;
`;
