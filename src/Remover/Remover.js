import React, {useState} from 'react';
import './Remover.css';

function Remover() {
	const [students, setStudents] = useState([
		'Abby Mecoil',
		'Toni Zuck',
		'Peter Hanshfield',
		'Rose Tobernak'
	]);

function deleteHandler(e,index) {
	const ind = parseInt(e.target.getAttribute("ind"));
	setStudents(students.filter((student,i)=>i!==ind));
}

	return (
		<div className="Remover">
			<h3>Remover:</h3>
			<p>Add a delete button for each student to remove it from the list.</p>
			<ul className="Remover__list">
				{students.map((student, index) => {
					return <li key={index}>{student} <button ind={index} onClick={deleteHandler}>Delete</button></li>
					
				})}
			</ul>
		</div>
	);
}

export default Remover;
