import React from "react";
import Card from "../Components/Card";
import { Link } from 'react-router-dom'
import { useGlobalState } from "../Context";


const Favs = () => {
  const {state, dispatch} = useGlobalState()

  const deleteFav = (dentist) =>{
    const newArrayFavs = state.favs.filter(favDelete => favDelete.id !== dentist.id) 
    dispatch({type: 'DELETE_FAV', payload:newArrayFavs})
  }


  return (
    <div className={(state.tema ? "dark" : null)}>
    
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {state.favs?.map(dentist =>( 
        
      <Card dentist={dentist} key={dentist.id}/>
      ))
    }
    </div>
    <div 
        style={{ 
            display: "flex", 
            flexDirection: "row", 
            justifyContent:'space-evenly',
            gap:'1rem',
            marginTop:'30px',
            marginBottom: "20px" }}>
        {state.favs.map(dentist => <button className="deleteButton" onClick={() => deleteFav(dentist)} 
          > <i class="fas fa-trash"></i> 
          Delete Fav</button>
        )}
        
      
    </div>
  </div>
  );
};

export default Favs;
