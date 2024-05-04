import { useParams } from "react-router";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const DetallesPlanet = () =>{
   const params = useParams();
   const {store,actions} = useContext(Context);
   


    console.log(store.infoPlanet);

   useEffect( () => {
    actions.getInfoPlanet(params.id);
   } ,[]);

// año, genero .altura
return(
    <div className="CharacterDetail">
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title text-center">{store.infoPlanet?.properties?.name}</h5>
                <p className="card-text text-center">{store.infoPlanet?.description}</p>
            </div>
            </div>
        </div>
    </div>
    <div>
    <div className="card border-danger mb-3 ">
        <div className="card-header">Header</div>
        <div className="d-flex flex-row">

        <div className="card-body text-danger">
            <h5 className="card-title">Diameter</h5>
            <p className="card-text">{store.infoPlanet?.properties?.diameter}</p>
        </div>
        <div className="card-body text-danger">
            <h5 className="card-title">Rotation Period</h5>
            <p className="card-text">{store.infoPlanet?.properties?.rotation_period}</p>
        </div>
        <div className="card-body text-danger">
            <h5 className="card-title">Orbital_Period</h5>
            <p className="card-text">{store.infoPlanet?.properties?.orbital_period}</p>
        </div>
        <div className="card-body text-danger">
            <h5 className="card-title">Gravity</h5>
            <p className="card-text">{store.infoPlanet?.properties?.gravity}</p>
        </div>
        <div className="card-body text-danger">
            <h5 className="card-title">Population</h5>
            <p className="card-text">{store.infoPlanet?.properties?.population}</p>
        </div>
        <div className="card-body text-danger">
            <h5 className="card-title">Climate</h5>
            <p className="card-text">{store.infoPlanet?.properties?.climate}</p>
        </div>

        </div>
        </div>
    </div>
</div>
)
}

