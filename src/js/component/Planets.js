import React, { useContext } from "react";
import Cards from "./Cards";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-body">
			<h1>Planets</h1>
			<div className="container-planets">
				<div className="row">
					<div className="cards-list">
						{store.planetas.map((planeta, index) => {
							return <Cards key={index} name={planeta.name} index={index} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Planets;
