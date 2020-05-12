import React from 'react';
import Clock from '../Components/Clock/Clock';

export default {
	title: 'Clock',
	component: Clock,
};

export const ClockComponent = () => <Clock />;

ClockComponent.story = {
	name: 'Clock',
};
