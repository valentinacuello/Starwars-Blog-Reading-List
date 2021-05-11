import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/cards.scss";
import { Heart } from "react-bootstrap-icons";

const Cards = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://images.unsplash.com/photo-1613254026301-71fd1a7fd020?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p>
					Gender: <span>{props.gender}</span>
				</p>
				<p>
					Hair-color: <span>{props.hair}</span>
				</p>
				<p>
					Eye-color: <span>{props.eyes}</span>
				</p>
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
	gender: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string,
	index: PropTypes.number
};

export default Cards;
