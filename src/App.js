import React from 'react';
import Clock from './Components/Clock/Clock';
import Spinner from './Components/Spinner/Spinner';

function App() {
	return (
		<div>
			<Clock />
			<Spinner text={'Waiting...'} />
		</div>
	);
}

export default App;
