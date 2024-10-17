# Calculadora Simples

Este é um projeto de **calculadora simples** desenvolvido em **React** com estilização utilizando **Styled Components**. A calculadora permite a realização de operações matemáticas básicas, como soma, subtração, multiplicação e divisão.

## Funcionalidades

- **Adicionar números**: Permite a inserção de números no visor da calculadora.
- **Operações básicas**: Suporta as operações de soma (`+`), subtração (`-`), multiplicação (`*`) e divisão (`/`).
- **Cálculo do resultado**: A função de igualdade (`=`) calcula o resultado da operação.
- **Limpar dados**: O botão `C` limpa o visor e reseta a calculadora.
- **Ponto decimal**: Suporte para números decimais.
  
## Tecnologias utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled Components**: Biblioteca para estilização de componentes no React utilizando CSS-in-JS.
  
## Estrutura do Projeto

O projeto segue uma estrutura simples, dividida em componentes:

```
.
├── src
│   ├── components
│   │   ├── Buttons.js
│   │   ├── Input.js
│   ├── styles.js
│   ├── App.js
│   ├── global.js
│   ├── index.js
│   ├── styles.js
├── README.md
├── package.json
```

### Componentes principais:

- **`App.js`**: Componente principal que gerencia a lógica da calculadora, incluindo as operações e o estado da aplicação.
- **`Input.js`**: Componente responsável por exibir o valor atual no visor da calculadora.
- **`Buttons.js`**: Componente para renderizar cada botão da calculadora.
- **`styles.js`**: Arquivo que define os estilos personalizados utilizando **Styled Components**.

## Como rodar o projeto

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**

### Passos para rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/pradojuliana91/Desafio-Calculadora-React.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd Desafio-Calculadora-React
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

4. Rode o projeto:
   ```bash
   npm start
   # ou
   yarn start
   ```

5. Acesse a aplicação no navegador:
   ```bash
   http://localhost:3000
   ```

## Exemplos de uso

A calculadora pode ser usada para realizar operações simples como `5 + 3`, `9 - 4`, `8 * 2`, ou `6 / 3`. Insira os números e as operações e, em seguida, clique no botão `=` para obter o resultado.

## Estilos

A interface da calculadora é estilizada utilizando **Styled Components**, proporcionando uma aparência moderna com as seguintes características:

- **Fundo colorido**: Azul claro (#0099FF) para a calculadora.
- **Botões responsivos**: Tamanhos adequados para fácil interação.
- **Visor dinâmico**: Atualiza o valor conforme as operações são realizadas.
- **Design minimalista**: Foco na simplicidade e usabilidade.

## Melhorias futuras

Algumas possíveis melhorias para o projeto incluem:

- Implementação de mais operações matemáticas, como porcentagem e raiz quadrada.
- Suporte para histórico de cálculos.
- Implementação de teclas do teclado para controle da calculadora.

