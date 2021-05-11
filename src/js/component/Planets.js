import React from "react";
import Cards from "./Cards";
import "../../styles/home.scss";

const Planets = () => {
	return (
		<div className="container-body">
			<h1>Planets</h1>
			<div className="container-planets">
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

export default Planets;
