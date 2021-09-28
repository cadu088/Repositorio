import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../componentes/NavBar';


const Projects = () =>{
    return (
      <><NavBar /><div>
        <h1>Projetos</h1>
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
  
  export default Projects;