import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import { useGlobalState } from '../Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state,dispatch} = useGlobalState()

  const toggleTheme = () => {
    dispatch({type:"TOGGLE_THEME"})
  }



  return (
    <nav className={state.tema ? "dark" : null}>
      <Link to={routes.home}><h4 className='link'>Home</h4></Link>
      <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
      <Link to={routes.favs}><h4 className='link'>Favs</h4></Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClass= "themeButton" onClick={toggleTheme}><i class="fas fa-adjust"></i></button>
    </nav>
  )
}

export default Navbar