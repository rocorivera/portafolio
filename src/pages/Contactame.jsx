import React from 'react'
import { useForm } from 'react-hook-form'



const Contactame = () => {
 


 
    return (
    <div className='form'>
        <h2 className='title_form'>Pongamonos en contacto!</h2>
        <h3 className='title_email'>correo: </h3>
        <h3 className='email_personal'>trebor.contrerasrivera@gmail.com</h3>
        <form className='formulario' action="">
            <label htmlFor="nombre">Nombre: 
            <input type="nombre" />
            </label>
            <label htmlFor="correo">
                Correo:
                <input type="correo" />
            </label>
            <label htmlFor="mensaje">
                mensaje: 
                <input type="mensaje" />
            </label>
            <input type="submit" value='enviar📨' />
        </form>
        
    </div>
  )
}

export default Contactame