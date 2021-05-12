import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/cards.scss";
import { Heart } from "react-bootstrap-icons";
import { Context } from "../store/appContext";

const Cards = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`}
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<h6 className="card-title">Genero: {props.gender}</h6>
				<div className="btn-container d-flex justify-content-between">
					<Link to={"/single/" + props.index}>
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

Cards.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	index: PropTypes.string,
	gender: PropTypes.string
};

export default Cards;
