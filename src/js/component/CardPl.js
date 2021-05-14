import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/cards.scss";
import { Heart } from "react-bootstrap-icons";
import { Context } from "../store/appContext";

const CardPl = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src={
					props.id != 1
						? `https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`
						: "https://starwars-visualguide.com/assets/img/planets/13.jpg"
				}
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<div className="btn-container d-flex justify-content-between">
					<Link to={"/single/" + props.id}>
						<button type="button" className="btn bg-dark">
							Read more!
						</button>
					</Link>
					<button type="button" className="btn bg-dark">
						<Heart />
					</button>
				</div>
			</div>
		</div>
	);
};

CardPl.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string
};

export default CardPl;
