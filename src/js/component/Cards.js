import React from "react";
import PropTypes from "prop-types";
import "../../styles/cards.scss";

const Cards = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="https://picsum.photos/200/200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Cards.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string
};

export default Cards;
