
const Inicio = ({dark}) => {

  
  return (
    <div className='info_mi'  >
         <h1 className={dark ?"dark_title":'title'} >Hola!</h1>
         
         <h2 className={dark ?"dark_title_n":'title_n'}>Soy Rober Contreras Rivera</h2>
         <img className='img_mia' src="mejor.jpg" alt="mejor.jpg" />
        
         <h3 className={dark?"dark_title_profetion": 'title_profetion'}>Desarrollador Web Full Stack</h3>
   <ul className={dark ?"dark_lista":'lista'}>
    <li className={dark?"dark_list_init": 'list_init'} ><a href="https://www.linkedin.com/in/robert-contreras-rivera-343184293/" target='_blank' >Linkedin</a></li>
    <li className={dark?"dark_list_init": 'list_init'}><a href="https://github.com/rocorivera" target='_blank'>Github</a></li>
    <li className={dark?"dark_list_init": 'list_init'}><a href="cv_web_full_stack.pdf" download='cv_web_full_stack.pdf' >Descargar CV</a></li>
   </ul>
   
    </div>
  )
}

export default Inicio