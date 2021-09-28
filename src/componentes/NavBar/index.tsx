import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';



function NavBar() {

  let fig = '';
  const hora = new Date();
  const atual = hora.getHours();
  if (atual >= 12 && atual < 18) {
    fig = '🎑'
} else if (atual >= 18) {
    fig = '🌕'
} else if (atual >= 0 && atual < 5) {
    fig = '🌄'
} else {
    fig = '☀'
}

  return (
   <div className="navBar">
     <div className="link">
       <div className="hub">
       <Link style={{ textDecoration: 'none', color: '#fff'}}  to="/hub">Hub</Link>
       </div>
       <div className="linguagens">
       <Link style={{ textDecoration: 'none', color: '#fff'}}  to="/linguagens">Linguagens</Link>
       </div>
       <div className="projetos">
       <Link style={{ textDecoration: 'none', color: '#fff'}}  to="/projetos">Projetos</Link>
       </div>
       <div className="contato">
       <Link style={{ textDecoration: 'none', color: '#fff'}}  to="/contato">Contato</Link>
       </div>
       <div className="fig">
       <Link style={{ textDecoration: 'none', color: '#fff'}}  to="/">{fig}</Link>
       </div>
     </div>

   </div>
  );
}

export default NavBar;
