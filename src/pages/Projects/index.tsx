
import FinishBar from '../../componentes/FinishBar';
import NavBar from '../../componentes/NavBar';
import UpTop from '../../componentes/UpTop';
import './styles.css';


const Projects = () =>{
    return (
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
          <h1>Sobre está página</h1>
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
          O site possui o intuito de pesquisar qualquer lugar no mundo atravez das cordenadas de latitude e longitude, trazendo o resultado pelo google maps de localização pesquisada, mostrando abaixo da pesquisa o local com zoom. Podendo ser usado em aulas para mostrar como uma carta mapa funciona e sua aplicabilidade no dia a dia. 
          <br></br><br></br><br></br><span style={{ fontSize:'14px'}}>Estado: Offline</span>
          </p>
         <h1 className="pesquisa-por-coordenadas-title"><span style={{ fontSize:'17px'}}>www.</span>pesquisa_por_coordenadas<span style={{ fontSize:'17px'}}>.com</span></h1>
        </div>
      </div>
      
        
      <UpTop/>
      <FinishBar/>
      </>
    );
  }
  
  export default Projects;