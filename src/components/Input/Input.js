import React from "react";
import "./Input.css";
import PropTypes from "prop-types";

class Input extends React.Component {
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
					height: "300px",
					margin: "0 auto",
					maxWidth: "90%"
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
						style={{
							boxSizing: "border-box",
							height: "100%",
							width: "100%"
						}}
					></textarea>
				</div>
				<section
					style={{
						display: "flex",
						flexDirection: "column",
						height: "15%",
						justifyContent: "center",
						margin: "0 auto",
						width: "90%"
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "center"
						}}
					>
						<button
							style={{
								width: "50%",
								border: "none",
								borderRadius: "10px",
								backgroundColor: "#90cec2"
							}}
						>
							Criar
						</button>
					</div>
				</section>
			</section>
		);
	}
}

Input.propTypes = {};

export default Input;
