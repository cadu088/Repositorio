import React from 'react';
import { Link } from 'react-router-dom';
import FinishBar from '../../componentes/FinishBar';
import NavBar from '../../componentes/NavBar';
import UpTop from '../../componentes/UpTop';


const Languagens = () =>{
    return (
      <><NavBar /><div>
        <h1>Linguagens</h1>
        <nav>
          <ul>
            <li>
              <Link to="/hub">hub</Link>
            </li>
            <li>
              <Link to="/contato">contato</Link>
            </li>
            <li>
              <Link to="/projetos">projetos</Link>
            </li>
            <li>
              <Link to="/linguagens">linguagens</Link>
            </li>
            <li>
              <Link to="/">Inicial</Link>
            </li>
          </ul>
        </nav>
      </div>
      <UpTop/>
      <FinishBar/>
      </>
    );
  }
  
  export default Languagens;