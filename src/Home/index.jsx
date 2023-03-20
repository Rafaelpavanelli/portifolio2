import './Home_modules.css';
import {FaReact,FaNode} from 'react-icons/fa';
import {SiSass,SiExpress,SiAxios} from 'react-icons/si';
import {BsGithub} from 'react-icons/bs';
import Data from '../Data.json';


const Home=()=>{
  const Projetos=Data.Projetos;
  
  return(
    <div className="Home">
      <main>
        <h1>Olá, Sou o Rafael</h1>
        <h2>Sou um <span>Desenvolvedor</span></h2>
      </main>
      <section>
        <h3>Sobre</h3>
        <p>
        Tenho 22 anos e estudo <span> desenvolvimento de sistemas</span> na faculdade EDUVALE
         em Avaré, estou no 2° ano de faculdade mas ja estudo programação a 2 anos,
          aonde dediquei 1 ano ao frontend web com foco em <span> React js.</span>
        </p>
      </section>
      <article>
        <h3>Skills</h3>
        <span>
          <FaReact />
          <p>React</p>
        </span>
        <span>
          <SiSass/>
          <p>SASS</p>
        </span>
        <span>
          <FaNode />
          <p>Node</p>
        </span>
        <span>
          <SiExpress />
          <p>React</p>
        </span>
        <span>
          <BsGithub/>
          <p>React</p>
        </span>
        <span>
          <SiAxios />
          <p>React</p>
        </span>
      </article>
      <article className='Projetos'>
      <h3>Ultimos projetos</h3>
     
      
      </article>
    </div>
  )
}
export default Home;