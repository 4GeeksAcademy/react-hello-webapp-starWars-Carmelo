import { useParams } from "react-router";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const DetallesVehicle = () =>{
   const params = useParams();
   const {store,actions} = useContext(Context);
   


    console.log(store.infoVehicle);

   useEffect( () => {
    actions.getInfoVehicle(params.id);
   } ,[]);


return(
    <div className="CharacterDetail">
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title text-center">{store.infoVehicle?.properties?.name}</h5>
                <p className="card-text text-center">{store.infoVehicle?.description}</p>
            </div>
            </div>
        </div>
    </div>
    <div>
    <div className="card border-danger mb-3 ">
        <div className="card-header">Header</div>
        <div className="d-flex flex-row">

        <div className="card-body text-danger">
            <h5 className="card-title">Cargo Capacity</h5>
            <p className="card-text">{store.infoVehicle?.properties?.cargo_capacity}</p>
        </div>
        <div className="card-body text-danger">
            <h5 className="card-title">Consumables</h5>
            <p className="card-text">{store.infoVehicle?.properties?.consumables}</p>
        </div>
        <div className="card-body text-danger">
            <h5 className="card-title">Cost in Credits</h5>
            <p className="card-text">{store.infoVehicle?.properties?.cost_in_credits}</p>
        </div>
        <div className="card-body text-danger">
            <h5 className="card-title">Crew</h5>
            <p className="card-text">{store.infoVehicle?.properties?.crew}</p>
        </div>
        <div className="card-body text-danger">
            <h5 className="card-title">Model</h5>
            <p className="card-text">{store.infoVehicle?.properties?.model}</p>
        </div>
        <div className="card-body text-danger">
            <h5 className="card-title">Vehicle Class</h5>
            <p className="card-text">{store.infoVehicle?.properties?.vehicle_class}</p>
        </div>

        </div>
        </div>
    </div>
</div>
)
}

