const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				//personajes
				try {
					const res = await fetch("https://www.swapi.tech/api/people/"); //acá hacemos el fetch, que seria la respuesta
					const data = await res.json(); //la data es la respuesta que nos da el fetch convertido a json
					console.log("Async:", data);
					setStore({
						personajes: data.results //results es la información que nos interesa de esa respuesta del fetch
					});
				} catch (error) {
					console.log(error);
				}
				//planetas
				try {
					const res = await fetch("https://www.swapi.tech/api/planets/");
					const data = await res.json();
					console.log("Async:", data);
					setStore({
						planetas: data.results
					});
				} catch (error) {
					console.log(error);
				}

				try {
					const personajeDetalles = getStore().personajes;
					Promise.all(
						personajeDetalles.map(element => {
							return new Promise(resolve => {
								fetch(element.url).then(response => {
									return new Promise(() => {
										response.json().then(data => {
											element.properties = data.result.properties;
										});
									});
								});
							});
						})
					);
					setStore({ personajes: personajeDetalles });
				} catch (error) {
					console.log(error);
				}
				// https://dev.to/askrishnapravin/for-loop-vs-map-for-making-multiple-api-calls-3lhd
				try {
					const planetaDetalles = getStore().planetas;
					Promise.all(
						planetaDetalles.map(element => {
							return new Promise(resolve => {
								fetch(element.url).then(response => {
									return new Promise(() => {
										response.json().then(data => {
											element.properties = data.result.properties;
										});
									});
								});
							});
						})
					);
					setStore({ planetas: planetaDetalles });
				} catch (error) {
					console.log(error);
				}
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			agregarFav: nuevoFav => {
				const store = getStore();
				let listaNuevaFavs = [...store.favoritos, nuevoFav];
				setStore({ favoritos: listaNuevaFavs });
				console.log(store.favoritos);
			}
		}
	};
};

export default getState;
