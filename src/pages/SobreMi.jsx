import React from 'react'
import {FaCss3,FaJs,FaHtml5,FaReact,FaNode} from "react-icons/fa"

const SobreMi = ({dark}) => {
  return (
    <div className='me'>
        <h2 className={dark ?"dark_me_title": 'me_title'}>Sobre Mi </h2>
        <h3 className='me_text'>Hola soy Rober, tengo 27 años un apasionado por la programacion, tengo una alta capacidad de adaptabilidad y aprendizaje, poseo conocimiento en javascripts, html, css, react, node, testing, migraciones, base de datos, encriptacion de contraseñas,psql y git hub,  creé esta pagina con algunos conocimientos de los que poseo, me gustan los video juegos y el anime y me encuentro en constante aprendizaje dentro de la programación.</h3>
        <ul className={dark?"dark_me_list": 'me_list'}>
        <li className={dark? "dark_me_list_ability": 'me_list_ability'}><FaJs/>
       </li>
        <li className={dark? "dark_me_list_ability": 'me_list_ability'}><FaHtml5/></li>
        <li className={dark? "dark_me_list_ability": 'me_list_ability'}><FaCss3/></li>
        <li className={dark? "dark_me_list_ability": 'me_list_ability'}><FaReact/></li>
        <li className={dark? "dark_me_list_ability": 'me_list_ability'}><FaNode/> </li></ul>
        <div className={dark?"dark_boton": 'boton'}>
          <a className={dark?"dark_me_boton": 'me_boton'} href="cv_web_full_stack.pdf" download='cv_web_full_stack.pdf' >Descargar CV</a>
          </div>
        
    </div>
  )
}

export default SobreMi