import React, { useContext } from "react";
import CardPl from "./CardPl";
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
							return <CardPl key={index} name={planeta.name} id={planeta.uid} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Planets;
