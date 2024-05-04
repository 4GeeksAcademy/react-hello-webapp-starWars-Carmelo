import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const removeFromFavorites = (characterName) => {
    actions.removeFavorite(characterName);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ms-4 me-5">
        <Link to="/">
          <a className="navbar-brand" href="#">
            <img src="https://static.vecteezy.com/system/resources/previews/027/127/457/original/star-wars-logo-star-wars-icon-transparent-free-png.png" width="100" height="100" className="card-img-top" alt="..." />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown btn btn-primary">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites ({store.favorites.length})
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                {store.favorites.map((favorite, index) => (
                  <li key={index} className="d-flex align-items-center">
                    <span className="dropdown-item">{favorite}</span>
                    <button className="btn btn-sm btn-danger ms-2" onClick={() => removeFromFavorites(favorite)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};