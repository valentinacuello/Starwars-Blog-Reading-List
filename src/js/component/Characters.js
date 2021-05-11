import React, { useContext } from "react";
import Cards from "./Cards";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

const Characters = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-body">
			<h1>Characters</h1>
			<div className="container-characters">
				<div className="row">
					<div className="cards-list">
						{store.personajes.map((personaje, index) => {
							return <Cards key={index} name={personaje.name} index={index} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Characters;
