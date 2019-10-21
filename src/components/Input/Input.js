import React from "react";
import "./Input.css";
import PropTypes from "prop-types";

class Input extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			noteText: ""
		};

		// bind functions
		this.chageNoteTextState = this.chageNoteTextState.bind(this);
		this.saveNote = this.saveNote.bind(this);
	}

	/**
	 * Método para salvar note no localStorage
	 * @method saveNote
	 * @return
	 */
	saveNote() {
		var notes = JSON.parse(localStorage.getItem("notes") || "[]");
		notes.push(this.state.noteText);
		localStorage.setItem("notes", JSON.stringify(notes));
		this.setState(
			{
				noteText: ""
			},
			() => {
				this.props.changeNotesState(notes);
			}
		);
	}

	/**
	 * Método para mudar state noteText a cada mudança
	 * @method chageNoteTextState
	 * @param {Object} evt event object
	 * @return
	 */
	chageNoteTextState(evt) {
		this.setState({
			noteText: evt.target.value
		});
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
						onChange={this.chageNoteTextState}
						style={{
							boxSizing: "border-box",
							height: "100%",
							width: "100%"
						}}
						value={this.state.noteText}
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
							onClick={this.saveNote}
						>
							Criar
						</button>
					</div>
				</section>
			</section>
		);
	}
}

Input.propTypes = {
	changeNotesState: PropTypes.func.isRequired
};

export default Input;
