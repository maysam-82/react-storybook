import React from 'react';
import Spinner from '../Components/Spinner/Spinner';

export default {
	title: 'Spinner',
	component: Spinner,
};

export const SpinnerWithText = () => <Spinner text="Loading...." />;
export const SpinnerWithoutText = () => <Spinner />;

SpinnerWithText.story = {
	name: 'Spinner with text',
};
SpinnerWithoutText.story = {
	name: 'Spinner without text',
};
