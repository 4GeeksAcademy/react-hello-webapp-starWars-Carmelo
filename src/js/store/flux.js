const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			characters: [],
			planets: [],
			vehicles:[],
			infoCharacter:[],
			infoPlanet:[],
			infoVehicle:[],
			favorites:[]
		},
		actions: {

			getAllCharacters() {
				fetch("https://www.swapi.tech/api/people", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => { setStore({ characters: data.results }) })
					.catch(err => console.error(err))
			},

			getInfoCharacter: (id) => {
				fetch("https://www.swapi.tech/api/people/"+id)
				.then(res => res.json())
				.then(data => setStore({ infoCharacter: data.result }))
				.catch(err => console.error(err))
			},


			getAllPlanets() {
				fetch("https://www.swapi.tech/api/planets/", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(err => console.error(err))
			},

			getInfoPlanet: (id) => {
				fetch("https://www.swapi.tech/api/planets/"+id)
				.then(res => res.json())
				.then(data => setStore({ infoPlanet: data.result }))
				.catch(err => console.error(err))
			},

			getAllVehicles() {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => {
						setStore({ vehicles: data.results });
					})
					.catch(err => console.error(err))
			},

			getInfoVehicle: (id) => {
				fetch("https://www.swapi.tech/api/vehicles/"+id)
				.then(res => res.json())
				.then(data => setStore({ infoVehicle: data.result }))
				.catch(err => console.error(err))
			},
			addFavorite: (characterName) => {
				const { favorites } = getStore();
				setStore({ favorites: [...favorites, characterName] });
			  },
			removeFavorite: (characterName) => {
				const { favorites } = getStore();
				const updatedFavorites = favorites.filter((name) => name !== characterName);
				setStore({ favorites: updatedFavorites });
			  }

		}
	};
};

export default getState;
