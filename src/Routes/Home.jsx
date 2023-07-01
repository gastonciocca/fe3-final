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
/*
const Home = () => {
  const [dentists,setDentists] = useState([])
  const url = `https://jsonplaceholder.typicode.com/users`

  useEffect (() => {
    axios(url)
    .then(res => setDentists(res.data))
  }, [url])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist) =>(
          <Link to={'/dentista/' + dentist.id} key={dentist.id}>
              <Card name={dentist.name} username={dentist.username} id={dentist.id}/>
          </Link>
          ))
        }
      </div>
    </main>
  )
}

export default Home
*/
