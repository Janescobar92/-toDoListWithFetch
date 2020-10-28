import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

export const ToDoList = props => {
	const [value, setValue] = useState("");
	// const [tasksArray, setTasksArray] = useState([]);
	const [tasksApiArray, setTasksApiArray] = useState([]);

	const isTaskDone = indexToCrossOut => {
		if (tasksApiArray[indexToCrossOut].done == false) {
			tasksApiArray[indexToCrossOut].done = true;
			console.log(tasksApiArray[indexToCrossOut].done);
		} else {
			tasksApiArray[indexToCrossOut].done = false;
			console.log(tasksApiArray[indexToCrossOut].done);
		}
	};
	const [myListElement, setMyListElement] = useState(null);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/jan", {
			method: "GET"
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.status);
				}
				return response.json();
			})
			.then(responseAsJson => {
				console.log(responseAsJson);
				// responseAsJson.map((task, index) => {
				// 	setTasksApiArray(task => [...tasksApiArray, task]);
				// });
				setTasksApiArray(responseAsJson);
			})
			.catch(error => {
				console.log("Error status: ", error);
			});
	}, []);

	useEffect(
		() => {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/jan", {
				method: "PUT",
				body: JSON.stringify(tasksApiArray),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(response => response.json())
				.then(answerUpload => {
					console.log("Success: ", JSON.stringify(answerUpload));
				})
				.catch(error => {
					console.log("Error status: ", error);
				});

			setMyListElement(
				tasksApiArray.map((task, index) => {
					return (
						<li key={index} className="list-element">
							{task.label}

							<button
								className="visible-or-not-button"
								onClick={() => {
									isTaskDone(index);
									console.log(tasksApiArray);
								}}>
								X
							</button>
						</li>
					);
				})
			);
		},
		[tasksApiArray]
	);

	// useEffect(() => {
	// 	setMyListElement(
	// 		tasksApiArray.map((task, index) => {
	// 			return (
	// 				<li key={index} className="list-element">
	// 					{task.label}

	// 					<button
	// 						className="visible-or-not-button"
	// 						onClick={() => {
	// 							isTaskDone(index);
	// 							console.log(tasksApiArray);
	// 						}}>
	// 						X
	// 					</button>
	// 				</li>
	// 			);
	// 		})
	// 	);
	// });

	return (
		<Fragment>
			<section>
				<form
					onSubmit={event => {
						event.preventDefault();
						if (value != "") {
							//doesn't allow adding tasks without content
							setTasksApiArray([
								...tasksApiArray,
								{ label: value, done: false }
							]);
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
				<p>{tasksApiArray.length} tareas añadidas</p>
			</footer>
		</Fragment>
	);
};
