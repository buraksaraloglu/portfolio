import React from 'react';
import { logEvent } from 'firebase/analytics';

import ProjectSummaries from '../../containers/ProjectSummaries';
import Hero from './components/Hero';
import { analytics } from '../../shared/firebase';

const Home = () => {
	logEvent(analytics, 'page_view', {
		name: 'Home Page',
	});

	return (
		<>
			<Hero />
			<ProjectSummaries />
		</>
	);
};

export default Home;
