import React from "react";
import Cards from "./Cards";
import "../../styles/home.scss";
import injectContext from "../store/appContext";

const Characters = () => {
	// let { character, setCharacter } = useContext(injectContext);
	return (
		<div className="container-body">
			<h1>Characters</h1>
			<div className="container-characters">
				<div className="row">
					<div className="cards-list">
						<Cards />
						<Cards />
						<Cards />
						<Cards />
						<Cards />
						<Cards />
						<Cards />
						<Cards />
						<Cards />
						<Cards />
						<Cards />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Characters;
