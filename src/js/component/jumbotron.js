import React from "react";
import { Card } from "./card.js";
export const Jumbotron = () => {
	return (
		<div className="container">
			<header className="jumbotron my-4">
				<h1 className="display-3">Peer Programming</h1>
				<p className="lead">
					This concept should be applied in Companies. Having 4 eyes
					instead of 2 is the best advantage. Driver and Navigator is
					the another recent concept applied to Google.
				</p>
				<a
					href="https://en.wikipedia.org/wiki/Pair_programming"
					className="btn btn-primary btn-lg">
					Concept
				</a>
			</header>
			<Card />
		</div>
	);
};
