import React,{useEffect,useState,useContext} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardCharacter = ({character}) =>{
const [detalles,setDetalles] = useState({})
const {store, actions} = useContext(Context);

const addToFavorites = () => {
  if (!store.favorites.includes(character.name)) {
    actions.addFavorite(character.name);
  }
};

useEffect(() => {
  fetch("https://www.swapi.tech/api/people/"+character.uid)
  .then(res => res.json())
  .then(data => setDetalles(data.result))
  .catch(err => console.error(err))
}, []);
  // console.log(detalles);
return(
    <div className="card" style={{width: "18rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{detalles.properties?.name}</h5>
    <p className="card-text">{detalles.properties?.hair_color}</p>
    <p className="card-text">{detalles.properties?.eye_color}</p>
    <Link to={`/people/${character.uid}`} className="btn btn-outline-primary" >Learn More</Link>
    <a href="#" className="btn btn-outline-warning"  onClick={addToFavorites}><i className="fa-regular fa-heart"></i></a>
  </div>
</div>
);
}
CardCharacter.propTypes = {
	name: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string
	
};