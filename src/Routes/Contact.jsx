import React from 'react'
import Form from '../Components/Form'
import { useState } from 'react'
import { useGlobalState } from '../Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Contact = () => {

  const [contacto, setContacto] = useState({
    nombre: '',
    email: null
  })
  
  
  const [show, setShow] = useState(false)
  const [mensajeError, setMensajeError] = useState('')
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(contacto.nombre.length >= 5 && contacto.email.includes('@')){
      setShow(true)
      setMensajeError('')
  
    } else {
     setShow(false)
     setMensajeError('Por favor verifique su información nuevamente')
  
    }
  }
  const {state} = useGlobalState()
  

  return (
    <div className={(state.tema ? "dark" : null)} >
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form handleSubmit={handleSubmit} setContacto={setContacto}/>
      {show ?  <p style={{color:'green'}}>Gracias {contacto.nombre}, te contactaremos cuanto antes vía mail </p> : null}
      {mensajeError && <p style={{color:'red'}}>{mensajeError}</p>}


    </div>
  )
}

export default Contact