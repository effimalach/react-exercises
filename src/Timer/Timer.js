import React,{useEffect,useState,useRef} from 'react';
import './Timer.css';

/* function usePersistentValue(initVal) {
	return useState({current : initVal})[0]
} */

function Timer() {
	const [count, setCount] = useState(null)

    //const id = usePersistentValue(null);
	const id = useRef(null);
	const isFirstRun = useRef(true);

	function play () {
     setCount(0);
	}

	function clear () {
		window.clearInterval(id.current)
	}
	

	function reset () {
		setCount(0);
	}

   	useEffect(() => {

		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		  }

     id.current = window.setInterval(()=>{
			setCount((c)=>c + 1)
		}, 1000)
		return clear
	}, [count]);



	
	return (
		<div className="Timer">
			<h3>Timer</h3>
			<ul className="Timer__explanation">
				<li><b>Play:</b> the timer should count the seconds and keep updating</li>
				<li><b>Pause:</b> the timer freeze the timer</li>
				<li><b>Reset:</b> should set the timer to 0</li>
			</ul>
			<div className="Timer__actions">
				<button onClick={play}>Play</button>
				<button onClick={clear}>Pause</button>
				<button onClick={reset}>Reset</button>
			</div>
			<div className="Timer__value">{count}</div>
		</div>
	);
}

export default Timer;
