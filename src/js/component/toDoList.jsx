import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

export const ToDoList = props => {
	const [value, setValue] = useState("");
	const [tasksArray, setTasksArray] = useState([]);

	const deletingTask = indexToDelete => {
		tasksArray.splice(indexToDelete, 1);
	};

	return (
		<Fragment>
			<section>
				<form
					onSubmit={event => {
						event.preventDefault();
						if (value != "") {
							//no permite añadir tareas sin contenido
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
				<ul className="taskList">
					{tasksArray.map((task, index) => {
						return (
							<li key={index}>
								{task}
								<button onClick={() => deletingTask(index)}>
									X
								</button>
							</li>
						);
					})}
				</ul>
			</section>
			<footer>
				<p>{tasksArray.length} tareas añadidas</p>
				{/* contador tareas, que el texto sea singular si es 1, plural si son más o menos */}
			</footer>
		</Fragment>
	);
};
