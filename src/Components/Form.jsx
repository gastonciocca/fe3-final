import React from "react";


const Form = ({setContacto, handleSubmit}) => {
  return(
<div className="form">
  <form onSubmit={handleSubmit} 
        style={{
            display: 'flex', 
            flexDirection:'column',
            width:'500px',
            alignItems:'center',
            marginBottom:'10px'
            }}>
        <label >Nombre Completo</label>
        <input type="text" onBlur={(e) => setContacto((prevState) => ({...prevState, nombre: e.target.value}))}/>
        <label >Email </label>
        <input type="email" onBlur={(e) => setContacto((prevState) => ({...prevState, email: e.target.value}))}/>

        
        <button className="button">Send</button>
    </form>
  

</div>
)}

export default Form