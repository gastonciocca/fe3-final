import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useFavStates } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'
import { useGlobalState } from '../Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {state,dispatch} = useGlobalState()
  const params = useParams()
  const detalleUrl = `https://jsonplaceholder.typicode.com/users/${params.id}`



  useEffect(()=>{
    axios(detalleUrl)
    .then(res =>dispatch({type: 'GET_DETAIL', payload:res.data}))
  },[])


  return (
    <div className={(state.tema ? "dark" : null)}
    style={{
      display: 'flex', 
      flexDirection:'column',
      alignItems:'center',
      }}>
      <h1>Detail Dentist id </h1>
      <h2>Name: {state.detalle.name}</h2>
      <h3>Email: {state.detalle.email}</h3>
      <h3>Phone: {state.detalle.phone}</h3>
      <h3>Website: {state.detalle.website}</h3>

    </div>
  )
}

export default Detail