import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://media4.giphy.com/media/LQiaQkNlU73xZs8y5l/giphy.gif?cid=ecf05e479v740ahxmf20maqrurreli06c8kwq0skj1sk5fi8&rid=giphy.gif&ct=s' className="App-logo" alt="logo" />
        <h1 className="titulo">Bem vindo</h1>
        <p className="linha">Acomode-se na cadeira é vamos junto nessa viagem!</p>
        <button type="button" className="go">🚀</button>        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
