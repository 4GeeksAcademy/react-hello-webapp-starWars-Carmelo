import React,{useEffect,useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const CardVehicle = ({vehicle}) =>{
const [detalles,setDetalles] = useState({})

useEffect(() => {
  fetch("https://www.swapi.tech/api/vehicles/"+vehicle.uid)
  .then(res => res.json())
  .then(data => setDetalles(data.result))
  .catch(err => console.error(err))
}, []);
  // console.log(detalles);
return(
    <div className="card" style={{width: "18rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{detalles.properties?.name}</h5>
    <p className="card-text">{detalles.properties?.model}</p>
    <p className="card-text">{detalles.properties?.vehicle_class}</p>
    <Link to={`/vehicle/${vehicle.uid}`} className="btn btn-outline-primary" >Learn More</Link>
    <a href="#" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></a>
  </div>
</div>
);
}
CardVehicle.propTypes = {
	name: PropTypes.string,
 
	
};