import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ToDoList = props => {
	let [value, setValue] = useState(null);
	let [tasksArray, setTasksArray] = useState([]);

	return (
		<div>
			<header>
				<h1>To Do List</h1>
			</header>
			<section>
				<form
					onSubmit={event => {
						setTasksArray([...tasksArray, value]);
						setValue("");
						event.preventDefault();
					}}>
					<input
						type="text"
						placeholder="New task"
						value={value}
						onChange={event => setValue(event.target.value)}
					/>
				</form>
				<ul className="taskList">
					{
						(useEffect(() => {
							tasksArray.map((task, index) => {
								return (
									<li key="task">
										{task}
										<button
											onClick={() => {
												tasksArray.splice(index, 1);
												console.log(tasksArray);
											}}>
											X
										</button>
									</li>
								);
							});
						}),
						[tasksArray])
					}
					{/* {tasksArray.map((task, index) => {
						return (
							<li key="task">
								{task} {console.log(tasksArray)}
								<button
									onClick={() => {
										tasksArray.splice(index, 1);
										console.log(tasksArray);
									}}>
									X
								</button>
							</li>
						);
					})} */}
				</ul>
			</section>
			<footer>
				<p>{tasksArray.length} tareas añadidas</p>
				{/* contador tareas, que el texto sea singular si es 1, plural si son más o menos */}
			</footer>
		</div>
	);
};
