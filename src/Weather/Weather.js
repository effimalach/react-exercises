import React from 'react';
import './Weather.css';
import { useEffect, useState } from 'react';


function Weather() {

	const [weatherInfo, setWeatherInfo] = useState([]);

	useEffect(() => {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
		.then((res)=>res.json())
		.then((data)=>setWeatherInfo(data))
	}, [])

	return (
		<div className="Weather">
			<p>
				Use the following API to display the hottest and coldest days:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
			</p>
			<div className="Weather__stats">
				<strong>Hottest day is: {
				weatherInfo
				.map((dayWeatherInfo)=>dayWeatherInfo.temperature)
				.reduce((prev,cur)=> cur > prev ? cur : prev , -10000)
			}</strong>
			</div>
			<div className="Weather__stats">
				<strong>Coldest day is: {
				weatherInfo
				.map((dayWeatherInfo)=>dayWeatherInfo.temperature)
				.reduce((prev,cur)=> cur < prev ? cur : prev , 10000)
			}</strong>
			</div>
		</div>
	);
}

export default Weather;
