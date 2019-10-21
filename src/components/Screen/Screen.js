import React from "react";
import "./Screen.css";
import PropTypes from "prop-types";

import Input from "../Input/Input";
import Note from "../Note/Note";

class Screen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: JSON.parse(localStorage.getItem("notes") || "[]")
		};

		// bind functions
		this.changeNotesState = this.changeNotesState.bind(this);
	}

	/**
	 * Método para setar e recuperar notas no localStorage
	 * @method changeNotesState
	 * @param {Object} notes objeto notas vindo do localStorage
	 * @return
	 */
	changeNotesState(notes) {
		this.setState({
			notes: notes
		});
	}

	/**
	 * Método para criar componentes de nota
	 * @method createNoteComponent
	 * @return {Object} Retorna os componentes montado
	 */
	createNoteComponent() {
		var componentes = [];
		for (var i in this.state.notes) {
			var html = (
				<Note text={this.state.notes[i]} key={"note" + i}></Note>
			);
			componentes.push(html);
		}

		return componentes;
	}

	render() {
		return (
			<div>
				<h1 style={{ textAlign: "center" }}>Note App</h1>
				<section style={{ padding: "20px 0" }}>
					<Input changeNotesState={this.changeNotesState}></Input>
				</section>
				<section style={{ padding: "20px 0" }}>
					{this.state.notes.length > 0 ? (
						<h2 style={{ textAlign: "center" }}>Notes</h2>
					) : null}
					{this.createNoteComponent()}
				</section>
			</div>
		);
	}
}

Screen.propTypes = {};

export default Screen;
