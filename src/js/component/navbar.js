import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "../../styles/home.scss";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../store/appContext";
import { Trash } from "react-bootstrap-icons";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [listaFavs, setListaFavs] = useState([]);

	return (
		<nav className="nav-bar">
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

				<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					{store.favoritos.map((favorito, index) => {
						return (
							<li key={index} className="item-favoritos">
								{favorito} <Trash className="delete" />{" "}
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
