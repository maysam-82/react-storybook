import React, { useState, useEffect } from 'react';
import classes from './styles.module.css';

const Clock = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		// use setInterval once components mounts to the DOM.
		const interval = setInterval(() => {
			setTime(() => setTime(new Date().toLocaleTimeString()));
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	// equivilent of componentWillUnmount
	return <dvi class={classes.clockContainer}>{time}</dvi>;
};

export default Clock;
