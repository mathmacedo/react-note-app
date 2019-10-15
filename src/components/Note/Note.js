import React from "react";
import "./Note.css";
import PropTypes from "prop-types";

import Input from "../Input/Input";

class Note extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<section
				style={{
					border: "1px solid black",
					display: "flex",
					flexDirection: "column",
					height: "200px",
					margin: "0 auto",
					maxWidth: "80%"
				}}
			>
				<textarea>{this.props.text}</textarea>
			</section>
		);
	}
}

Note.propTypes = {
	text: PropTypes.string.isRequired
};

export default Note;
