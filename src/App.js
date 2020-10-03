import React from 'react';
import Wrapper from './components/Wrapper'
import Container from './components/Container'
import Header from './components/Header'
import Main from './components/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main />
      </Container>
    </div>
  );
}

export default App;
