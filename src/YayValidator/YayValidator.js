import React,{useState} from 'react';
import './YayValidator.css';

function YayValidator() {
	const [color, setColor] = useState('')
	return (
		<div className="YayValidator">
			<p>
				When the input contains the value "yay",
				change the input's background color to <span className="YayValidator__sample">green</span>:
			</p>
			<input onChange={(event)=> event.target.value.includes("yay") && setColor('green') } type="text" className="text-box"  style={{color}}/>
		</div>
	);
}

export default YayValidator;
