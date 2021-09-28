import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../componentes/NavBar';


const Contacts = () =>{
    return (
      <><NavBar /><div>
        <h1>Contatos</h1>
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
      </div></>
    );
  }
  
  export default Contacts;