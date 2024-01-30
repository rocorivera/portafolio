import React, { useState } from 'react'


const Proyecto = () => {
// indice de la imagen
const imagenes=[
  ('../src/img/pokedex.png'),
  ('../src/img/rick_and_morty.png'),
  ('../src/img/e-commerse.png')
  ]
const [imagenesActual, setImagenesActual] = useState(0)

const cantidad= imagenes?.length;

const handleNext = ()=>{
  setImagenesActual(imagenesActual === cantidad -1 ? 0 : imagenesActual+ 1)
}

const handleBack=()=>{
  setImagenesActual(imagenesActual===0 ? cantidad -1 : imagenesActual -1)
}

  return (
    <div className='pag_proyect'>
        <h2>PROYECTOS</h2>
        <div className='carrusel'>
         
        <div className='carrusel_grande'>
            
        {imagenes.map((imagen, index)=>{
          return (
            <div> 
              {imagenesActual === index && (
                <img className='carrusel_img' key={index} src={imagen} alt='imagen'/>
              )}
            </div>
          )
        })}
         </div>
       
        <ul className='carrusel_puntos' > 
            <li className='carrusel_punto' onClick={handleBack}></li>
         
            <li className='carrusel_punto' onClick={handleNext}></li>
        </ul>
    </div>
    </div>
  )
}

export default Proyecto