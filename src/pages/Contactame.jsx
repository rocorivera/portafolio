import React, {  useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
 


const Contactame = ({dark}) => {

  const form=useRef()

  const [data , setData  ] = useState()

  const sendEmail = (data) => {
    setData(data)
    reset({
      nombre:'',
      correo:"",
      mensaje:""
    })
  
    emailjs
      .sendForm('service_lms1o9c', 'template_gi7gqpf', form.current, {
        publicKey: '_ueK8ctDkW9-bDuEg',
      })
      .then(
        () => {
          console.log('enviado correctamente');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
     
}


    const {register, formState:{errors} , handleSubmit, reset }=useForm();
    
   
     
 
    return (
    <div className='form' >
        <h2 className='title_form'>Pongamonos en contacto!</h2>
        <h3 className='title_email'>correo: </h3>
        <h3 className='email_personal'>trebor.contrerasrivera@gmail.com</h3>
        <form className={dark?"dark_formulario": 'formulario'}   action=''ref={form} onSubmit={handleSubmit(sendEmail)} >
            
            <label className={dark?"dark_label_form": 'label_form'} htmlFor="nombre">Nombre:
            <input className={dark?"dark_form_input": 'form_input'} placeholder='Ingresa tu nombre'
            name="nombre"
             type="text"
             {...register("nombre",{required:true})} />
            {errors.nombre?.type==="required" && <p>el campo nombre es requerido</p>} 
            </label>
            <label className={dark?"dark_label_form": 'label_form'} htmlFor="correo">
                Correo:
                <input 
                className={dark?"dark_form_input": 'form_input'} 
                 placeholder='Ingresa tu correo'
                 name='correo'
                 type="text"
                  {...register('correo' , {
                    pattern:/\S+@\S+\.\S+/
                },
                {
                required:{value:true,
                message:"correo requerido"
                }
                }
                )} />
                {errors.correo?.type==="pattern"&& <p>el formato del correo es incorrecto</p>}
            </label>
            <label className={dark?"dark_label_form": 'label_form'} htmlFor="mensaje">
                mensaje: 
                <input 
                className={dark?"dark_form_input": 'form_input'} placeholder='Deja tu mensaje 😁' 
                name='mensaje'
                type="text"
                {...register("mensaje",{required:true})} />
                {errors.mensaje?.type==='required'&& <p>deja tu mensaje </p>}
                </label>
              <input className={dark?"dark_btn_envio": 'btn_envio'} type="submit" name="" id="" value="enviar📨" />
        </form>
        
    </div>
  )
}

export default Contactame