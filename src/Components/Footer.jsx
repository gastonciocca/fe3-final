import React from 'react'
import { useGlobalState } from "../Context";

const Footer = () => {
  const {state} = useGlobalState()


  return (
    <footer className={(state.tema ? "dark" : null)}>

        <p>Powered by</p>
        <img src="./images/DH.png"
        alt='DH-logo' />
    </footer>
  )
}

export default Footer
