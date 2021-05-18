import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ArrowLeft, Heart, HeartFill } from "react-bootstrap-icons";

export const Personajes = props => {
	const { store, actions } = useContext(Context);
	const [isHovered, setIsHovered] = useState(false);
	const params = useParams();
	const id = parseInt(params.theid) - 1;

	return (
		<div className="details-body">
			<div className="wrapper">
				<div className="detalle-container">
					<div className="pic">
						<img
							src={`https://starwars-visualguide.com/assets/img/characters/${
								store.personajes[id].uid
							}.jpg`}
						/>
						<div className="detalles-bg-separador" />
						<div className="detalles-bg" />
					</div>
					<div className="detalles">
						<h1>{store.personajes[id].name}</h1>
						<p>
							“When gone am I, the last of the Jedi will you be. The Force runs strong in your family.
							Pass on what you have learned.”
						</p>
						<p>
							Birth year: <span>{store.personajes[id].properties.birth_year}</span>{" "}
						</p>
						<p>
							Gender: <span>{store.personajes[id].properties.gender}</span>
						</p>
						<p>
							Hair color: <span>{store.personajes[id].properties.hair_color}</span>
						</p>
						<p>
							Eye color: <span> {store.personajes[id].properties.eye_color}</span>
						</p>
						<button
							disabled={store.favoritos.includes(store.personajes[id].name)}
							onMouseEnter={() => setIsHovered(!isHovered)}
							onMouseLeave={() => setIsHovered(!isHovered)}
							onClick={() => {
								actions.agregarFav(store.personajes[id].name);
							}}>
							{store.favoritos.includes(store.personajes[id].name) ? (
								<HeartFill style={{ color: "#4b4b4b", fontSize: 20, marginRight: 10 }} />
							) : isHovered ? (
								<HeartFill style={{ color: "#4b4b4b", fontSize: 20, marginRight: 10 }} />
							) : (
								<Heart style={{ color: "grey", fontSize: 20, marginRight: 10 }} />
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Personajes.propTypes = {
	match: PropTypes.object
};
//  {store.demo[params.theid].title}
