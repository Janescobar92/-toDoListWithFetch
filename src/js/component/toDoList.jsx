import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

export const ToDoList = props => {
	const [value, setValue] = useState("");
	const [tasksArray, setTasksArray] = useState([]);

	const deletingTask = indexToDelete => {
		tasksArray.splice(indexToDelete, 1);
	};
	const [myListElement, setMyListElement] = useState(null);

	useEffect(() => {
		setMyListElement(
			tasksArray.map((task, index) => {
				return (
					<li key={index} className="list-element">
						{task}
						<button
							className="visible-or-not-button"
							onClick={() => deletingTask(index)}>
							X
						</button>
					</li>
				);
			})
		);
	});

	return (
		<Fragment>
			<section>
				<form
					onSubmit={event => {
						event.preventDefault();
						if (value != "") {
							//doesn't allow adding tasks without content
							setTasksArray([...tasksArray, value]);
							setValue("");
						}
					}}>
					<input
						type="text"
						placeholder="New task"
						value={value}
						onChange={event => setValue(event.target.value)}
					/>
				</form>
				<ul className="taskList">{myListElement}</ul>
			</section>
			<footer>
				<p>{tasksArray.length} tareas añadidas</p>
				{/* contador tareas, que el texto sea singular si es 1, plural si son más o menos */}
			</footer>
		</Fragment>
	);
};
