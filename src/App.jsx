import './App.css'
// IMPORTACION INICIO
import Inicio from './pages/Inicio'
import { Link, Route,Router,Routes } from 'react-router-dom'
// IMPORTAR SOBRE MI
import SobreMi from './pages/SobreMi'
import Proyecto from './pages/Proyecto'
import Contactame from './pages/Contactame'

function App() {
// modo oscuro 

  
  return (
    <div>
      <header className='header_porta'>
        <img className='logo_mi' src="mi logo.png" alt="" />
        <nav>
          <ul className='directori'>
            <li className='list_porta'> <Link to='/'>inicio</Link></li>
            <li className='list_porta'> <Link to='/SobreMi' >sobre mi</Link></li>
            <li className='list_porta'><Link to='/proyectos'>proyectos</Link></li>
            <li className='list_porta'><Link to='/contactame'>contactame</Link></li>
          </ul>
        </nav>
        <img className='modo_dark' src="night.png" alt="" />
      </header>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/SobreMi' element={<SobreMi/>}/>
        <Route path='/proyectos' element={<Proyecto/>} />
        <Route path='/Contactame' element={<Contactame/>} />
      </Routes>
   
    </div>
 
  )







}

export default App
