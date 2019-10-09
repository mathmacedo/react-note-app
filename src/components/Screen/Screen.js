import React from "react";
import "./Screen.css";
import PropTypes from "prop-types";

import Input from "../Input/Input";

class Screen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<h1 style={{ textAlign: "center" }}>Note App</h1>
				<Input></Input>
			</div>
		);
	}
}

Screen.propTypes = {};

export default Screen;
