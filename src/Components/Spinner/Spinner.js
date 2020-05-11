import React from 'react';
import classes from './styles.module.css';

const Spinner = ({ text }) => {
	return (
		<div className={classes.spinnerContainer}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			{text ? <p>{text}</p> : null}
		</div>
	);
};

export default Spinner;
