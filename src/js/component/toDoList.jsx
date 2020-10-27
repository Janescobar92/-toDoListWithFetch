import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ToDoList = props => {
	let [value, setValue] = useState(null);
	let [tasksArray, setTasksArray] = useState([]);
	{
		console.log(value);
	}
	return (
		<div>
			<header>
				<h1>To Do List</h1>
			</header>
			<section>
				<form
					onSubmit={event => {
						event.preventDefault();
						setTasksArray([...tasksArray, value]);
					}}>
					<input
						type="text"
						placeholder="New task"
						value={value}
						onChange={event => setValue(event.target.value)}
					/>
				</form>
				{console.log(tasksArray)}
				<ul className="taskList">
					{/* aquí se irán añadiendo las tareas, con un map que recorre el array y va creando cada elemento de la lista con su contenido en esa posicion */}
					{/* {tasksArray.map(task,index){
                        return (
                            <li>{task}</li>
                        );
                    }} */}
				</ul>
			</section>
			<footer>
				<p>n tareas añadidas</p>
				{/* contador tareas, que el texto sea singular si es 1, plural si son más o menos */}
			</footer>
		</div>
	);
};
