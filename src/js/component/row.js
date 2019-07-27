import React from "react";
import PropType from "prop-types";

export const Row = props => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<img
					className="card-img-top"
					src="http://placehold.it/500x325"
					alt=""
				/>
				<div className="card-body">
					<h4 className="card-title">{props.cardName}</h4>
					<p className="card-text">{props.cardText}</p>
				</div>
				<div className="card-footer">
					<a href={props.buttonRef} className="btn btn-primary">
						{props.buttonName}
					</a>
				</div>
			</div>
		</div>
	);
};

Row.propTypes = {
	buttonName: PropType.string,
	buttonRef: PropType.string,
	cardText: PropType.string,
	cardName: PropType.string
};
