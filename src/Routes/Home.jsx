import React from 'react'
import Card from '../Components/Card'
import { useGlobalState } from '../Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
const {state} = useGlobalState()

console.log(state.lista);
console.log(state.tema);


return (
  <main className={(state.tema ? "dark" : null)} >
  <h1>Home</h1>
  <div className='card-grid'>
    {state.lista?.map(dentist =>( 
      <Card dentist={dentist} key={dentist.id}/>
      ))
    }
  </div>
</main>
)
}

export default Home
