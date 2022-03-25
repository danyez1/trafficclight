import React from "react";
//import { useState } from "react/cjs/react.production.min";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [selectedColor, setSelectedColor] = useState("Red");

	return (
		<>
			<h1>{selectedColor}</h1>
			<div className="trafficc-Light">
				<div
					onClick={() => setSelectedColor("Red")}
					className={
						"Light Red " + (selectedColor == "Red" ? "Glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("Yellow")}
					className={
						"Light Yellow " +
						(selectedColor == "Yellow" ? "Glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("Green")}
					className={
						"Light Green " +
						(selectedColor == "Green" ? "Glow" : "")
					}></div>
			</div>
		</>
	);
}
