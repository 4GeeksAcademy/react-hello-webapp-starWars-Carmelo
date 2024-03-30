import React from "react";
import PropTypes from "prop-types";

export const CardVehicles = (props) =>{
   
return(
    <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <a href="#" className="btn btn-outline-primary">Learn More</a>
    <a href="#" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></a>
  </div>
</div>
);
}

CardVehicles.propTypes ={
    name: PropTypes.string,
}