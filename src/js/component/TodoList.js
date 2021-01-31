import React, { useState } from "react";

const TodoList = () => {
	const [tarea, guardarTarea] = useState("");
	const [lista, guardarLista] = useState([]);

	const crearTarea = e => {
		if (e.keyCode == 13) {
			let newLista = [];
			for (let i = 0; i < lista.length; i++) {
				newLista.push(lista[i]);
			}
			newLista.push(tarea);
			guardarLista(newLista);
			guardarTarea("");
		}
	};

	const deleteItems = indexItem => {
		guardarLista(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};

	const contLista = lista.map(function(newTarea, i) {
		return (
			<li
				key={i}
				className="list-group-item mb-4 d-flex justify-content-between">
				{newTarea}
				<div className="btn text-danger" onClick={e => deleteItems(i)}>
					<i className="far fa-trash-alt" />
				</div>
			</li>
		);
	});

	const Counter = lista.length;

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h1 className="text-capitalize text-center">
							<i className="fab fa-react" />
							{"TodoList with React"}
						</h1>
					</div>
				</div>
			</div>

			<div className="card card-body my-3">
				<div className="input-group">
					<div className="input-group-prepend">
						<div className="input-group-text bg-primary text-white">
							<i className="fas fa-book" />
						</div>
					</div>
					<input
						className="form-control text-capitalize"
						value={tarea}
						onKeyDown={crearTarea}
						onChange={e => {
							guardarTarea(e.target.value);
						}}
						type="text"
						placeholder="Escribe tus deberes aquí"
					/>
				</div>

				<ul className="list-group list-group-flush text-center">
					{contLista}
				</ul>
				<div className="card-footer text-white bg-danger mt-3">
					{Counter === 0 ? "Aún nada :(" : Counter}
				</div>
			</div>
		</>
	);
};
export default TodoList;
