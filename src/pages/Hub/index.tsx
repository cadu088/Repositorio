import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../componentes/NavBar';
import UpTop from '../../componentes/UpTop';
import FinishBar from '../../componentes/FinishBar';
import './styles.css';


const Hub = () =>{
    return (
      <body>
      <><NavBar />
      <br/>
      <div className="card">
        <div className="barCard">
          <div className="bolls">
           <div className="boll1"></div>
           <div className="boll2"></div>
           <div className="boll3"></div>
          </div>
        </div>
        <div className="text">
          <h1>Bem-vindo</h1>
          <p>Olá, seja bem-vindo ao meu portifólio web 😁, eu sou o Carlos estudante de Sistemas de Informação pelo UNIARAXÁ, atualmente no 2º período, focado em desenvolvimento 👨‍💻 e em aprendizado continuo. Um famoso entusiasta do mundo moderno. 🪐</p>
        <p>Tenho 19 anos, moro em Araxá-MG, Brasil 🌎, e aqui você vai conhecer mais sobre meus trabalhos e modos de programação, então fique à-vontade para dar uma espiadinha em meu GitHub ao final. 🚀</p>
        </div>
        <div className="photo">
          <img/>
        <h1 className="name">Carlos Rodrigues</h1>
        <p className="ocupa">Dev</p>
        </div>
      </div>
      <div className="areaDesenvol">
        <div className="text2">
        <h1 className="tituloEp">desenvolvimento<span>.exe</span></h1>
        <p className="titleDes">Twenty One Pilots (estilizado como twenty one pilots ou twenty øne piløts)[1] é um duo americano originário de Columbus, Ohio. A banda foi formada em 2009 e é composta por Tyler Joseph e Josh Dun.[2] Eles lançaram dois álbuns independentes, Twenty One Pilots, em 2009, e Regional at Best, em 2011, antes de assinarem com a gravadora Fueled by Ramen, em 2012. Seu primeiro álbum com esta gravadora, Vessel, foi lançado em 2013.[3] O duo alcançou um grande sucesso com seu quarto álbum, Blurryface, lançado em 2015. O quinto álbum de estúdio do duo, Trench, foi lançado em 5 de outubro de 2018. </p>
        </div>
      </div>
      <UpTop/>
      <FinishBar/>
      </>
      </body>
    );
  }
  
  export default Hub;