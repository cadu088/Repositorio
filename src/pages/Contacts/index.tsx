import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../componentes/NavBar';

import './styles.css';


const Contacts = () =>{
    return (
      <><NavBar />
      
      <div className="containerCentral">
        <h1 className='titleAba'>Entre em <span className='spantext'>contato</span></h1>
        <div className='cell1' > 
        <div>
          <p className='title' style={{textAlign: 'center'}}>Contato selecionado</p>
          <div className='selecionaContato' title='Carlos Rodrigues'>
          <div className="photoContato" >
          <img/>
        <h1 className="nameContato">Carlos Rodrigues</h1>
        </div>
        </div>
        <div className='contatosLista'>
        <a className='aContatos' href="https://instagram.com/carlosrs088"><p className='pContatos'>Instagram</p></a>
          <a className='aContatos' href="https://www.linkedin.com/in/carlos-eduardo-r-18b56718b/"><p className='pContatos'>Linkedin</p></a>
          <a className='aContatos'><p className='pContatos'>Pinterest</p></a>
          <a className='aContatos'><p className='pContatos'>TikTok</p></a>
          <a className='aContatos' href = "mailto:carloseduardors088@gmail.com" ><p className='pContatos'>Email</p></a>
        </div>
        </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Contacts;