import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ArrowLeft, Heart, HeartFill } from "react-bootstrap-icons";

export const Planetas = props => {
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
							src={
								store.planetas[id].uid != 1
									? `https://starwars-visualguide.com/assets/img/planets/${
											store.planetas[id].uid
									  }.jpg`
									: "https://starwars-visualguide.com/assets/img/planets/13.jpg"
							}
						/>
						<div className="detalles-bg" />
					</div>
					<div className="detalles">
						<h1>{store.planetas[id].name}</h1>
						<p>
							“When gone am I, the last of the Jedi will you be. The Force runs strong in your family.
							Pass on what you have learned.”
						</p>
						<button
							disabled={store.favoritos.includes(store.planetas[id].name)}
							onMouseEnter={() => setIsHovered(!isHovered)}
							onMouseLeave={() => setIsHovered(!isHovered)}
							onClick={() => {
								actions.agregarFav(store.planetas[id].name);
							}}>
							{store.favoritos.includes(store.planetas[id].name) ? (
								<HeartFill style={{ color: "yellow", fontSize: 20, marginRight: 10 }} />
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
