import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Calculator from "./components/Calculator";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
