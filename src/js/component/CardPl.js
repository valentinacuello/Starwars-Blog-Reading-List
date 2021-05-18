import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/cards.scss";
import { ArrowLeft, Heart, HeartFill } from "react-bootstrap-icons";
import { Context } from "../store/appContext";

const CardPl = props => {
	const { store, actions } = useContext(Context);
	const [isHovered, setIsHovered] = useState(false);

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
					<Link to={"/planetas/" + props.id}>
						<button type="button" className="btn bg-dark">
							Read more!
						</button>
					</Link>
					<button
						disabled={store.favoritos.includes(props.id)}
						onMouseEnter={() => setIsHovered(!isHovered)}
						onMouseLeave={() => setIsHovered(!isHovered)}
						onClick={() => {
							actions.agregarFav(props.name);
						}}>
						{store.favoritos.includes(props.name) ? (
							<HeartFill style={{ color: "#4B4B4B", fontSize: 20, marginRight: 10 }} />
						) : isHovered ? (
							<HeartFill style={{ color: "#4B4B4B", fontSize: 20, marginRight: 10 }} />
						) : (
							<Heart style={{ color: "grey", fontSize: 20, marginRight: 10 }} />
						)}
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
