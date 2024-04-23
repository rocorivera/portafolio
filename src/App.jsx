import './App.css'
// IMPORTACION INICIO
import Inicio from './pages/Inicio'
import { Link, Route,Routes, } from 'react-router-dom'
// IMPORTAR SOBRE MI
import SobreMi from './pages/SobreMi'
import Proyecto from './pages/Proyecto'
import Contactame from './pages/Contactame'
import {FaSun, FaMoon} from 'react-icons/fa'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
// modo oscuro 

const [dark, setDark] = useState(false)

const darkMode=()=>{
  if(dark === false){
    setDark(true)
  }else{
    setDark(false)
  }
  return darkMode
}
 
  return (
 
       <div>
        <body  className={dark ? "dark_body":"light_body"} >
      <header className={dark? "dark_header" : 'header_porta'}>
        <img className={dark ? "dark_logo":"mi_logo"} src={dark ? "dark_logo.png":"mi_logo.png"} alt="" />
        <nav>
          <ul className={dark?"dark_directori": 'directori'}>
            <li className={dark ? 'dark_list_header':'list_porta'}> <Link  to='/'><div className={dark ? 'dark_name':'light_name'}> inicio</div></Link></li>
            <li className={dark ? 'dark_list_header':'list_porta'}> <Link to='/SobreMi' > <div className={dark ? 'dark_name':"light_name"}>sobre mi</div></Link></li>
            <li className={dark ? 'dark_list_header':'list_porta'}><Link to='/proyectos'><div className={dark ? 'dark_name':"light_name"}> proyectos</div></Link></li>
            <li className={dark ? 'dark_list_header':'list_porta'}><Link to='/contactame'><div className={dark ? 'dark_name':"light_name"}>contactame</div></Link></li>
          </ul>
          <div className='menu'><GiHamburgerMenu/></div>
          <ul className='modo_oscuro'>
          <li className='switch'>
            <div className='sol_luna'>
            <i className={dark ? 'dark':"light"} onClick={darkMode} >{ dark==false ? <FaMoon/>: < FaSun/>} </i>
            </div>
            </li>
          </ul>
        </nav>
        
      </header>
      <Routes>
        <Route path='/' element={<Inicio dark={dark}/>}/>
        <Route path='/SobreMi' element={<SobreMi dark={dark}/>}/>
        <Route path='/proyectos' element={<Proyecto  dark={dark}/>}/>
        <Route path='/Contactame' element={<Contactame dark={dark}/>} />
      </Routes>
       </body>
        </div>
  
   
 
  )

}

export default App 
