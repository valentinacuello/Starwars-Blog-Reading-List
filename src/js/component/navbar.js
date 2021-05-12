import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "../../styles/home.scss";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="">
			<Link to="/">
				<img src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" />
			</Link>
			<div className="dropdown">
				<button
					className="btn dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<ul>
						<li>HOLA</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
