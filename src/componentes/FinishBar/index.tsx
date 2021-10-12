import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';



function FinishBar() {


  return (
   <div className="FinishBar">
     <div className="link">
       <div className="hub" title="Feito por">
       <a>Orgulhosamente feito por <span>Carlos Rodrigues</span>.</a>
       </div>
       <div className="linguagens" title="Meu GitHub">
       <a style={{ textDecoration: 'none', color: '#000'}} target="_blank" href="https://github.com/cadu088">GitHub</a>
       </div>
       <div className="projetos" title="Meu Linkedin">
       <a style={{ textDecoration: 'none', color: '#000'}} target="_blank" href="https://www.linkedin.com/in/carlos-eduardo-r-18b56718b/">Linkedin</a>
       </div>
       <div className="contato" title="Entre em contato">
       <Link style={{ textDecoration: 'none', color: '#000'}}  to="/contato">Contato</Link>
       </div>
     </div>

   </div>
  );
}

export default FinishBar;
