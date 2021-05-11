const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			planetas: []
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
					const personajeDetalles = getStore().personajes; //acá agarro a store y llamo a personajes (creo una copia)
					for (const element of personajeDetalles) {
						//un for para que recorra cada personaje y haga fetch a la url de ese personaje
						const res = await fetch(element.url);
						const data = await res.json(); //convierto el json a objeto
						console.log(data);
						element.properties = data.result.properties; //estoy creando la propiedad properties del elemento, donde guardare el resul.properties de cada personaje (esto viene de cada url que tiene cada personaje)
					}
					setStore({ personajes: personajeDetalles }); //y aca guardo la copia que ahora adentro tiene más detalles
				} catch (error) {
					console.log(error);
				}

				//                 await Promise.all(files.map(async (file) => {
				//     const contents = await fs.readFile(file, 'utf8')
				//     console.log(contents)
				//   }));
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
			}
		}
	};
};

export default getState;
