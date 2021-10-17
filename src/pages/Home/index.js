import React, { Suspense, lazy } from 'react';
import { logEvent } from 'firebase/analytics';

import { analytics } from '../../shared/firebase';
import HeroSkeleton from './components/Hero/skeleton';

const Hero = lazy(() => import('./components/Hero'));
const ProjectSummaries = lazy(() => import('../../containers/ProjectSummaries'));

const Home = () => {
	const url = window.location.href;

	logEvent(analytics, 'page_view', {
		page_title: 'Home Page',
		page_location: url,
	});

	return (
		<>
			<Suspense fallback={<HeroSkeleton />}>
				<Hero />
			</Suspense>
			<Suspense fallback={<div>Loading</div>}>
				<ProjectSummaries />
			</Suspense>
		</>
	);
};

export default Home;
