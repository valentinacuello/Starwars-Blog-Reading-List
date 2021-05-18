import React from "react";
import "../../styles/home.scss";

const Loading = () => {
	return (
		<div className="loading-container">
			<div className="sables-container">
				<div className="laser-1">
					<div className="sable" />
					<div className="handle" />
				</div>
				<div className="laser-2">
					<div className="sable" />
					<div className="handle" />
				</div>
			</div>
			<p>Loading...</p>
		</div>
	);
};

export default Loading;
