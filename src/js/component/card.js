import React from "react";
import { Row } from "./row.js";

export const Card = () => {
	return (
		<div className="row text-center">
			<Row
				buttonName="LinkedIn"
				buttonRef="https://www.linkedin.com"
				cardtext="LinkedIn a place to networking"
				cardName="Want a job?"
			/>
			<Row
				buttonName="Yahoo"
				buttonRef="https://www.yahoo.com"
				cardtext="Live in Spain"
				cardName="Open an account!!"
			/>
			<Row
				buttonName="Google"
				buttonRef="https://www.google.com"
				cardtext="Better search ever"
				cardName="Not faster enough?"
			/>
			<Row
				buttonName="Amazon"
				buttonRef="https://www.amazon.com"
				cardtext="No need to go to a store"
				cardName="Everything is here!"
			/>
		</div>
	);
};
