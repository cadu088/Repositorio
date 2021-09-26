import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

function Home() {
  let texto = '';
  let fig = '';
  const hora = new Date();
  const atual = hora.getHours();
  if (atual >= 12 && atual < 18) {
    fig = '🎑'
    texto = 'Boa tarde!'
} else if (atual >= 18) {
    fig = '🌕'
    texto = 'Boa noite!'
} else if (atual >= 0 && atual < 5) {
    fig = '🌄'
    texto = 'Boa madrugada!'
} else {
    fig = '☀'
    texto = 'Bom dia!'
}

// const link = setTimeout("funcao()",3000)
// const history = useHistory();
// const handleHub = useCallback(() => history.push('/hub'), [history]);


  return (
    
    <div className="App">
      <header className="App-header">
        <div className="tagNow">
          <h1 className="tagNowText" title={texto} id="tagNowText">{fig}</h1>
        </div>
        <img src='https://media4.giphy.com/media/LQiaQkNlU73xZs8y5l/giphy.gif?cid=ecf05e479v740ahxmf20maqrurreli06c8kwq0skj1sk5fi8&rid=giphy.gif&ct=s' className="App-logo" alt="logo" />
        <h1 className="titulo">{texto}</h1>
        <p className="linha">Acomode-se e vamos juntos nessa viagem!</p>
        <button type="button" title="Embarcar" className="go" ><Link to="/hub">🚀</Link></button>
        
        {/* <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a> */}
        <p className="obs">vamos precisar desse foguete =)</p>
      </header>
    </div>
  );
}

export default Home;
