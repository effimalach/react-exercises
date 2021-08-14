import React,{useState} from 'react';
import './Tasks.css';

function Tasks() {
	const [value, setValue] = useState('')
	const [tasks, setTasks] = useState([])
	return (
		<div className="Tasks">
			<h3>Tasks:</h3>
			<p>Make a Todo list (add only):</p>
			<input value={value} onChange={(event)=>setValue(event.target.value)} placeholder="Your task..." /> 
			<button onClick={(event)=>setTasks([...tasks, value])}>Add task</button>
			<ul>
				{tasks.map((task,i)=><li  key={i}>{task}</li>)}
			</ul>
		</div>
	);
}

export default Tasks;
