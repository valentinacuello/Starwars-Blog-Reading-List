import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import Characters from "../component/Characters";
import Planets from "../component/Planets";
import Loading from "../component/Loading";

const Home = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

	return (
		<div className="">
			<div className="body">
				{loading == true ? (
					<Loading />
				) : (
					<div className="mt-4">
						<Characters /> <Planets />
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
