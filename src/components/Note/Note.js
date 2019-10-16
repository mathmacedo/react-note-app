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
					border: "2px solid #9589d8",
					borderRadius: "15px",
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
				<div style={{ margin: "5px auto" }}>
					<button
						style={{
							background: "none",
							border: "none",
							cursor: "pointer",
							padding: "0 10px"
						}}
					>
						<img
							alt="icon trash"
							src="https://img.icons8.com/windows/20/000000/trash.png"
						/>
					</button>
					<button
						style={{
							background: "none",
							border: "none",
							cursor: "pointer",
							padding: "0 10px"
						}}
					>
						<img
							alt="icon edit"
							src="https://img.icons8.com/wired/20/000000/edit-column.png"
						/>
					</button>
				</div>
			</section>
		);
	}
}

Note.propTypes = {
	text: PropTypes.string.isRequired
};

export default Note;
