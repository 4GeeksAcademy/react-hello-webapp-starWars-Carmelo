// https://www.swapi.tech/documentation

import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardCharacter } from "../component/cardCharacter.jsx";
import { CardPlanets } from "../component/cardPlanets.jsx";
import { CardVehicle } from "../component/cardVehicles.jsx";


export const Home = () => {
    const { store, actions } = useContext(Context);
    const handleCharacterClick = (uid) => {
        actions.getInfoCharacter(uid);
    };

    useEffect(() => {
        actions.getAllCharacters();
        actions.getAllPlanets();
        actions.getAllVehicles();

    }, []);

    // console.log(store.characters);
    // console.log(store.planets);
    // console.log(store.vehicles);


    return (
        <>
            <div className="container">
                <div>
                    <h2 className="text-danger">Characters</h2>
                    <div className="d-flex " style={{ overflowX: "scroll" }}>
                        {store.characters.map((item) => {
                            return (
                                <div className="text-center mt-5" key={item.uid}>
                                    <CardCharacter
                                        character={item}
                                    
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <h2 className="text-danger">Planets</h2>
                    <div className="d-flex " style={{ overflowX: "scroll" }}>
                        {store.planets.map((item) => {
                            return (
                                <div className="text-center mt-5" key={item.uid}>
                                    <CardPlanets
                                        planet={item}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <h2 className="text-danger">Vehicles</h2>
                    <div className="d-flex " style={{ overflowX: "scroll" }}>
                        {store.vehicles.map((item) => {
                            return (
                                <div className="text-center mt-5" key={item.uid}>
                                    <CardVehicle
                                        vehicle={item}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
