
import FinishBar from '../../componentes/FinishBar';
import NavBar from '../../componentes/NavBar';
import UpTop from '../../componentes/UpTop';
import './styles.css';


const Projects = () =>{
    return (
      <body>
      <><NavBar />
      <div className="background1"> 
        <div className="background1-align">
         <h1 className="background1-title">code<span style={{ fontSize:'20px'}}>.exe</span></h1>
         <p className="background1-text">“A um passo do futuro a um atraso do passado”</p>
       </div>
      </div>

      <div className='background2'>
        <div className='background2-align'>
        <div className='img-align'>
          <div className='img'></div>
          <h1 className='background2-title'>Sobre está página</h1>
        </div>
        <p className='background2-text'>
        Aqui você vera sobre todos os meus projetos, desde projetos da faculdade até os que eu mesmo desenvolvi.<br></br>
<br></br>
Lembre-se, todos os projetos que estão aqui possuem o codigó postado em meu GitHub, basta acessar a aba de contato e o encontrara!
        </p>
        </div>
      </div>

      <div className='pesquisa-por-coordenadas'>
         <div className='pesquisa-por-coordenadas-align'>
         <p className='pesquisa-por-coordenadas-text'>
          O site possui o intuito de pesquisar qualquer lugar no mundo atravez das cordenadas de latitude e longitude, trazendo o resultado pelo google maps da localização pesquisada, mostrando abaixo da pesquisa o local com zoom. Podendo ser usado em aulas para mostrar como uma carta mapa funciona e sua aplicabilidade no dia a dia. 
          <br></br><br></br><br></br><span style={{ fontSize:'14px'}}>Status: Offline</span>
          </p>
         <h1 className="pesquisa-por-coordenadas-title"><span className='span' style={{ fontSize:'17px'}}>www.</span>pesquisa_por_coordenadas<span className='span'  style={{ fontSize:'17px'}}>.com</span></h1>
        </div>
      </div>

      <div className='pesquisa-por-coordenadas-imgs'>
        <div className='pesquisa-por-coordenadas-imgs-align'>
          <div className='imgPortas1'/>
          <div className='imgPortas2'/>
        </div>
      </div>

      <div className='prosacast'>
        <div className='prosacast-align'>
          <div className='prosacast-title'>
          <h1 className="prosacast-title1">Prosa<br/><span>Cast.<br/></span>Prosa<br/><span>Tec.</span></h1>
          </div>
          <p className='prosacast-text1'>O projeto Prosa iniciou-se com o ProsaTec, um canal de ajuda para pessoas com maior dificuldade com tecnologia, 
          onde foi criado um canal do youtube, site e um grupo no WhatsApp com 
          as pessoas que precisavam de ajuda. A produção de conteudo ocorreu da maneira que ficasse 
          mais didatica e possibilitasse o maior entendimento das tecnologias!
          <br></br><br></br><br></br><span style={{ fontSize:'14px'}}>Status: Online</span></p>
          <p className='prosacast-text2'>
          Como continuação do ProsaTec o ProsaCast é um podcast de tecnologia, voltado para 
          todas as pessoas, onde falamos sobre os principais 
          assunto do momento na área e explicamos alguns assuntos de forma descontraida!
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><span style={{ fontSize:'14px'}}>Status: Desenvolvimento</span></p>
        </div>
      </div>

      <div className='prosacast-video'>
        <div className='prosacast-video-align'>
          <div className='prosacast-logo'/>
          <iframe className='prosacast-video1' width="560" height="315" src="https://www.youtube-nocookie.com/embed/vEI-cS9fuZw?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      
        
      <UpTop/>
      <FinishBar/>
      </>
      </body>
    );
  }
  
  export default Projects;