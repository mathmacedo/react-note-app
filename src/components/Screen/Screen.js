import React from "react";
import "./Screen.css";
import PropTypes from "prop-types";

import Input from "../Input/Input";
import Note from "../Note/Note";

class Screen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	/**
	 * Método para criar componentes de nota
	 * @method createNoteComponent
	 * @return {Object} Retorna os componentes montado
	 */
	createNoteComponent() {
		var componentes = [];
		for (var i = 0; i <= 10; i++) {
			var html = <Note text={"Texto" + i} key={"teste" + i}></Note>;
			componentes.push(html);
		}

		return componentes;
	}

	render() {
		return (
			<div>
				<h1 style={{ textAlign: "center" }}>Note App</h1>
				<section style={{ padding: "20px 0" }}>
					<Input></Input>
				</section>
				<section style={{ padding: "20px 0" }}>
					<h2 style={{ textAlign: "center" }}>Notes</h2>
					{this.createNoteComponent()}
				</section>
			</div>
		);
	}
}

Screen.propTypes = {};

export default Screen;
