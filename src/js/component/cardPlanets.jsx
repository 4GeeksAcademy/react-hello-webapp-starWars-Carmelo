import React,{useEffect,useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const CardPlanets = ({planet}) =>{
const [detalles,setDetalles] = useState({})

useEffect(() => {
  fetch("https://www.swapi.tech/api/planets/"+planet.uid)
  .then(res => res.json())
  .then(data => setDetalles(data.result))
  .catch(err => console.error(err))
}, []);
  // console.log(detalles);
return(
    <div className="card" style={{width: "18rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{detalles.properties?.name}</h5>
    <p className="card-text">Population:{detalles.properties?.population}</p>
    <p className="card-text">Terrain:{detalles.properties?.terrain}</p>
    <Link to={`/planet/${planet.uid}`} className="btn btn-outline-primary" >Learn More</Link>
    <a href="#" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></a>
  </div>
</div>
);
}
CardPlanets.propTypes = {
	name: PropTypes.string,

	
};