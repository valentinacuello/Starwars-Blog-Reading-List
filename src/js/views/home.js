import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Characters from "../component/Characters";
import Planets from "../component/Planets";

export const Home = () => (
	<div className="">
		<div className="body">
			<Characters />
			<Planets />
		</div>
	</div>
);
