import React from "react";
import { useGlobalState } from "../Context";
import { Link } from "react-router-dom";
import { routes } from './utils/routes'
import { useLocation } from "react-router-dom";

const Card = ({dentist}) => {
  const location = useLocation();
  const {state, dispatch} = useGlobalState()
  

  const addFav = ()=> {
    const findDentist = state.favs.find(dentista => dentista.id === dentist.id)

    if(!findDentist){
      dispatch({type: 'ADD_FAV', payload: dentist})
    } else {
      alert('Ya está en favoritos')
    }
  }
  
  const isFavsPage = location.pathname === routes.favs;

  return (
    <main className={(state.tema ? "dark" : null)}>
      <div className="card">
        <h4>{dentist.name}</h4>
        <img src="./images/doctor.jpg" alt="dentista" className="card-img" />

        <h5>User: {dentist.username}</h5>
        <p>Id: {dentist.id}</p>

        <Link to={'/dentista/' + dentist.id} key={dentist.id}><p className="detail">Conocer más</p></Link>
        
        {!isFavsPage && (
          <button onClick={addFav} className="favButton">
            <i
              className={
                state.favs.find((dentista) => dentista.id === dentist.id)
                  ? "fas fa-star text-yellow"
                  : "far fa-star"
              }
            ></i>
          </button>
        )}
      </div>
    </main>
  );
};

export default Card;






