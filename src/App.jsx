import Home from "./Routes/Home";
import Contact from "./Routes/Contact"
import Detail from './Routes/Detail';
import Favs from './Routes/Favs'
import { Route, Routes } from 'react-router-dom'
import {routes} from './Components/utils/routes'
import Layout from "./Layout/Layout";


function App() {
  return (
      <div className="App">
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path={routes.home} element={<Home/>}/>
              <Route path={routes.contact} element={<Contact/>}/>
              <Route path={routes.detail} element={<Detail/>}/>
              <Route path={routes.favs} element={<Favs/>}/>
            </Route>
          </Routes>
      </div>
  )
}

export default App;
