import React from "react";
import PropTypes from "prop-types";

export const CardCharacter = (props) =>{
   
return(
    <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.hair_color}</p>
    <p className="card-text">{props.eye_color}</p>
    <a href="#" className="btn btn-outline-primary">Learn More</a>
    <a href="#" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></a>
  </div>
</div>
);
}
CardCharacter.propTypes = {
	name: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string
	
};