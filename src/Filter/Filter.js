import React, {useState,useRef} from 'react';
import './Filter.css';

function Filter() {

	const [items,setItems] = useState([
		'Big fox',
		'Small elephant',
		'Big ant',
		'Small dinosaur',
		'Medium dog'
	]);

    const ref = useRef(items);

function filt(event) {
	
    setItems(ref.current.filter((item)=>item.includes(event.target.value)))
}

	return (
		<div className="Filter">
			<p>Filter the list as you type.</p>
			<input placeholder="Search..." className="Filter__textbox" 
			onChange={filt}/>

			<ul>
				{   items.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	)
}

export default Filter;
