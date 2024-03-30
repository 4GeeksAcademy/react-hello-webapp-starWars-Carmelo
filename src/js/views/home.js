import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardCharacter } from "../component/cardCharacter.jsx";
import { CardPlanets } from "../component/cardPlanets.jsx";
import { CardVehicles } from "../component/cardVehicles.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllCharacters();
        actions.getAllPlanets();
        actions.getAllVehicles();
    }, []);

    console.log(store.characters);
    console.log(store.planets);
    console.log(store.vehicles);


    return (
        <>
            <div className="container">
                <div>
                    <h2 className="text-danger">Characters</h2>
                    <div className="d-flex " style={{ overflowX: "scroll" }}>
                        {store.characters.map((item) => {
                            return (
                                <div className="text-center mt-5" key={item.id}>
                                    <CardCharacter
                                        properties={item}
                                        name={item.name}
                                        hair_color={item.hair_color}
                                        eye_color={item.eye_color}
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
                                <div className="text-center mt-5" key={item.id}>
                                    <CardPlanets
                                        properties={item}
                                        name={item.name}
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
                                <div className="text-center mt-5" key={item.id}>
                                    <CardVehicles
                                        properties={item}
                                        name={item.name}
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
