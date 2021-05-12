import React, { useContext, useState, useEffect } from "react";
import CardCh from "./CardCh";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

const Characters = () => {
	const { store, actions } = useContext(Context);
	const [gender, setGender] = useState("LOL");

	useEffect(() => {
		if (store.personajes.length > 0 && store.personajes[0].properties != null) {
			setGender(store.personajes[0].properties.gender);
		}
	}, []);

	return (
		<div className="container-body">
			<h1>Characters</h1>
			<div className="container-characters">
				<div className="row">
					<div className="cards-list">
						{store.personajes.map((personaje, index) => {
							return (
								<CardCh
									key={index}
									name={personaje.name}
									id={personaje.uid}
									index={personaje.uid}
									gender={gender}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Characters;
