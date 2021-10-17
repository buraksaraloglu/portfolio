import { logEvent } from 'firebase/analytics';

import { analytics } from '../shared/firebase';

export const handleAnalyticsLog = (event, name) => {
	logEvent(analytics, event, {
		name,
	});
};
