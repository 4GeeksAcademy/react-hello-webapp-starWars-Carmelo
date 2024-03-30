const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			characters: [],
			planets: [],
			vehicles:[],
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

			getAllVehicles() {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => {
						setStore({ vehicles: data.results });
					})
					.catch(err => console.error(err))
			}

		}
	};
};

export default getState;
