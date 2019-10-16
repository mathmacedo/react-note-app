import React from "react";
import "./Note.css";
import PropTypes from "prop-types";

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
					margin: "20px auto",
					maxWidth: "80%"
				}}
			>
				<div
					style={{
						flex: "1",
						height: "85%",
						margin: "20px auto",
						width: "95%"
					}}
				>
					<textarea
						style={{ height: "100%", width: "100%" }}
						defaultValue={this.props.text}
					></textarea>
				</div>
			</section>
		);
	}
}

Note.propTypes = {
	text: PropTypes.string.isRequired
};

export default Note;
