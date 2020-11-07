import React from "react";
import { ToDoList } from "./toDoList.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="to-do-list">
			<header>
				<h1 className="d-flex justify-content-center">
					To do {""}
					<span className="list-word">List</span>
				</h1>
			</header>
			<ToDoList />
		</div>
	);
}
