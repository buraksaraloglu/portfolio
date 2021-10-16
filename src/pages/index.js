import { lazy } from 'react';

const pages = {
	HOME: lazy(() => import('./Home')),
};

export default pages;
