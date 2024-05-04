import { useParams } from "react-router";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const DetallesPeople = () =>{
   const params = useParams();
   const {store,actions} = useContext(Context);
   


    console.log(store.infoCharacter);

   useEffect( () => {
    actions.getInfoCharacter(params.id);
   } ,[]);

// año, genero .altura
return(
  <div className="CharacterDetail">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-center">{store.infoCharacter?.properties?.name}</h5>
                        <p className="card-text text-center">{store.infoCharacter?.description}</p>
                    </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="card border-danger mb-3 ">
                <div className="card-header">Header</div>
                <div className="d-flex flex-row">

                <div className="card-body text-danger">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">{store.infoCharacter?.properties?.name}</p>
                </div>
                <div className="card-body text-danger">
                    <h5 className="card-title">Birth Year</h5>
                    <p className="card-text">{store.infoCharacter?.properties?.birth_year}</p>
                </div>
                <div className="card-body text-danger">
                    <h5 className="card-title">Gender</h5>
                    <p className="card-text">{store.infoCharacter?.properties?.gender}</p>
                </div>
                <div className="card-body text-danger">
                    <h5 className="card-title">Height</h5>
                    <p className="card-text">{store.infoCharacter?.properties?.height}</p>
                </div>
                <div className="card-body text-danger">
                    <h5 className="card-title">Skin Color</h5>
                    <p className="card-text">{store.infoCharacter?.properties?.skin_color}</p>
                </div>
                <div className="card-body text-danger">
                    <h5 className="card-title">Eye Color</h5>
                    <p className="card-text">{store.infoCharacter?.properties?.eye_color}</p>
                </div>

                </div>
                </div>
            </div>
        </div>
    )
}


