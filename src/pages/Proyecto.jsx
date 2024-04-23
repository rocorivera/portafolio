
import {FaGithub} from 'react-icons/fa'

const Proyecto = ({dark}) => {




  return (
    <div className={dark?"dark_pag_proyect": 'pag_proyect'}>
      <h2 className={dark?"dark_proyect": 'proyect'}>PROYECTOS</h2>
        <div className={dark?"dark_mi_proyects": 'mi_proyects'}>
          <div className={dark?"dark_proyects": 'proyects'}>
            <h2 className={dark?"dark_proy_title": 'proy_title'}>POKEDEX</h2>
            <img className={dark?"dark_img_proyect": 'img_proyect'} src="pokedex.png" alt="pokedek.png" />
            <p className={dark?"dark_text_proyect": 'text_proyect'}>En este proyecto realize el consumo de una api utilizando react, html, css y  librerias como router-dom, redux, axios. fue un muy buen reto y me gusto enfrentarme a ello.</p>
          </div>
          <button className={dark?"dark_button_proyect": 'button_proyect'}><a href="https://github.com/rocorivera/pokedex" target='_blank'  >ver codigo</a></button>
            <button className={dark?"dark_button_proyect": 'button_proyect'}><a href="http://pokedex2019.netlify.app" target="_blank" rel="noopener    noreferrer">Ver App</a></button>
          <div className={dark?"dark_proyects": 'proyects'}>
            <h2 className={dark?"dark_proy_title": 'proy_title'}>Rick And Morty</h2>
            <img className={dark?"dark_img_proyect": 'img_proyect'}  src="rick_and_morty.png"alt="rick_and_morty.png" />
            <p className={dark?"dark_text_proyect": 'text_proyect'}> Consumo de api, para este proyecto utilize algunas librerias como react dom, axios este proyecto desarrollado con react, javascripts, css y el mayor reto fue la toma de color para la aplicacion. </p>
          </div>
          <button className={dark?"dark_button_proyect": 'button_proyect'}><a href="https://github.com/rocorivera/rickandmorty"target='_blank'>Ver Código</a></button>
            <button className={dark?"dark_button_proyect": 'button_proyect'}><a href="https://my-rick-and-morty12.netlify.app/"target='_blank'>Ver App</a></button>
          <div className={dark?"dark_proyects": 'proyects'}>
            <h2 className={dark?"dark_proy_title": 'proy_title'}>E-commerse</h2>
            <img className={dark?"dark_img_proyect": 'img_proyect'} src="e-commerse.png" alt="e-commerse.png" />
            <p className={dark?"dark_text_proyect": 'text_proyect'}>Este fue mi primer proyecto es un e-commerse utilizando solamente html,javascripts y css uno de los proyectos que fue bastante largo y dificil pero quede conforme con los resultados </p>
          </div>
          <button className={dark?"dark_button_proyect": 'button_proyect'}><a href="https://github.com/Danieljsh094/Tienda-Academlo.git" target="_blank" >Ver Código</a></button>
            <button className={dark?"dark_button_proyect": 'button_proyect'}><a href="https://tiendaacademlo-1.netlify.app/" target="_blank">Ver App</a></button>
          <button className={dark?"dark_button_proyect": 'button_proyect'}><a href="https://github.com/rocorivera?tab=repositories" target="_blank"><FaGithub/></a></button>
        </div>
    </div>
  )
}

export default Proyecto