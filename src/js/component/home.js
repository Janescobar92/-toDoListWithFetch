import React from "react";
import { ToDoList } from "./toDoList.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container">
			<header>
				<h1>To Do List</h1>
			</header>
			<ToDoList />
		</div>
	);
}
