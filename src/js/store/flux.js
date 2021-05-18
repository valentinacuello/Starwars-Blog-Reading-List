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

				//PERSONAJES - agrego  más info
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

			agregarFav: nuevoFav => {
				const store = getStore();
				let listaFavs = [];
				if (store.favoritos.includes(nuevoFav)) {
					listaFavs = store.favoritos;
					let indexFav = listaFavs.indexOf(nuevoFav);
					listaFavs.splice(indexFav, 1);
				} else {
					listaFavs = [...store.favoritos, nuevoFav];
				}
				setStore({ favoritos: listaFavs });
				console.log(store.favoritos);
			},

			eliminarFav: favIndex => {
				const store = getStore();
				let listaNuevaFavs = store.favoritos.filter((favorito, index) => {
					if (favIndex != index) {
						return favorito;
					}
				});

				setStore({ favoritos: listaNuevaFavs });
			}
		}
	};
};

export default getState;
