import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Calculator from "./components/Calculator";

const Container = styled.div`
  background: #023C40;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
