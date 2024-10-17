import React, { useState } from 'react';
import Input from './components/Input';
import Buttons from './components/Buttons';
import { Container, Content, Row, EqualButton, Title, Description } from "./styles";

const App = () => {
  const [inputValue, setInputValue] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleAddNumbers = (number) => {
    setInputValue(prev => `${prev === "0" ? "" : prev}${number}`);
  }

  const handleEqual = () => {
    if (firstNumber && operation) {
      let result;
      switch (operation) {
        case "+":
          result = Number(firstNumber) + Number(inputValue);
          break;
        case "-":
          result = Number(firstNumber) - Number(inputValue);
          break;
        case "*":
          result = Number(firstNumber) * Number(inputValue);
          break;
        case "/":
          result = Number(firstNumber) / Number(inputValue); 
          break;
        default:
          result = inputValue;
      }
      setInputValue(result.toString());
      setFirstNumber(null);
      setOperation(null);
    }
  };

  const handleClear = () => {
    setInputValue("0");
    setFirstNumber(null);
    setOperation(null);
  };

  const handleOperation = (operator) => {
    if (firstNumber === null) {
      setFirstNumber(inputValue);
      setInputValue("0");
      setOperation(operator);
    } else {
      handleEqual(); 
      setOperation(operator);
    }
  };

  return (
    <Container>
      <Content>
      <Title>Calculadora Simples</Title> 
        <Description>Faça cálculos básicos de forma rápida!</Description> 
        <Input value={inputValue} />
        <Row>
          <Buttons label="7" onClick={() => handleAddNumbers("7")} />
          <Buttons label="8" onClick={() => handleAddNumbers("8")} />
          <Buttons label="9" onClick={() => handleAddNumbers("9")} />
          <Buttons label="/" onClick={() => handleOperation("/")} /> 
        </Row>
        <Row>
          <Buttons label="4" onClick={() => handleAddNumbers("4")} />
          <Buttons label="5" onClick={() => handleAddNumbers("5")} />
          <Buttons label="6" onClick={() => handleAddNumbers("6")} />
          <Buttons label="*" onClick={() => handleOperation("*")} />
        </Row>
        <Row>
          <Buttons label="1" onClick={() => handleAddNumbers("1")} />
          <Buttons label="2" onClick={() => handleAddNumbers("2")} />
          <Buttons label="3" onClick={() => handleAddNumbers("3")} />
          <Buttons label="-" onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Buttons label="0" onClick={() => handleAddNumbers("0")} />
          <Buttons label="," onClick={() => handleAddNumbers(".")} />
          <Buttons label="C" onClick={handleClear} />
          <Buttons label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <EqualButton onClick={handleEqual}>=</EqualButton>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
