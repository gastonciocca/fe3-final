import React from 'react'
import axios from "axios";
import { useReducer } from "react";
import { createContext, useContext, useState, useEffect } from "react";

export const ContextGlobal = createContext();


const initialState = {
    lista: [],
    detalle: {},
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    tema: false,
  }


const reducer = (state, action) => {
switch(action.type){
    case 'GET_LIST' :
        return {...state, lista:action.payload}
    case 'GET_DETAIL' :
        return {...state, detalle:action.payload}
    case 'ADD_FAV' :
        return {...state, favs:[...state.favs, action.payload]}
    case 'DELETE_FAV':
        return {...state, favs: action.payload}
    case 'TOGGLE_THEME':
    return { ...state, tema:!state.tema}
    default: 
    throw new Error() 
}
}

const Context = ({children}) => {
    const[state,dispatch] = useReducer(reducer,initialState)
    const urlListado = `https://jsonplaceholder.typicode.com/users`

useEffect (() => {
    axios(urlListado)
    .then(res => dispatch({type:'GET_LIST', payload:res.data}))
    .catch(err => console.log(err))
    }, [])
  

useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
}, [state.favs])

console.log(state);

    return (
        <ContextGlobal.Provider value={{
          state,dispatch
        }}>
          {children}
        </ContextGlobal.Provider>
      )
}

export default Context

export const useGlobalState = () => useContext(ContextGlobal)
