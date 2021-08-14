import React, {useState,useRef} from 'react';
import './SmartParagraph.css';

function SmartParagraph() {

	const [text,setText] = useState(
		`I must explain to you how all this mistaken idea of
		denouncing pleasure and praising pain was born and I will give
		you a complete account of the system and expound the actual
		teachings of great explorers.`
	);
    const textRef = useRef(text)
	const [isToggled, setToggled] = useState(false);

	function toggle() {
		setToggled(!isToggled);
		isToggled ? setText((t)=>t.substring(0,101)): setText(textRef.current)
	}

	return (
		<div className="SmartParagraph">
			<p className="SmartParagraph__explanation">
				When clicking on "Toggle" button,
				the following paragraph should display only 100 characters.
				The challenge is cutting between words!
				Clicking again should show all of the text back.
			</p>
			<p className="SmartParagraph__value">
				{text}
			</p>
			<button onClick={toggle}>Toggle</button>
		</div>
	);
}

export default SmartParagraph;
