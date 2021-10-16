import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import pages from '../pages';

const ROUTES = [
	{
		path: '/',
		key: 'HOME',
		name: 'Home',
		exact: true,
		component: pages.HOME,
	},
	{
		path: '/contact',
		key: 'CONTACT',
		name: 'Contact',
		exact: true,
		component: pages.HOME,
	},
];

const RouteWithSubRoutes = ({ route }) => (
	<Route
		path={route.path}
		exact={route.exact}
		render={(properties) => (
			<Suspense fallback={<div>Loading...</div>}>
				<route.component {...properties} routes={route.routes} />
			</Suspense>
		)}
	/>
);

// eslint-disable-next-line react/prop-types
export function RenderRoutes({ routes }) {
	return (
		<Switch>
			{routes.map((route) => (
				<RouteWithSubRoutes key={route.key} route={route} />
			))}
			<Route component={() => <h1>Not Found!</h1>} />
		</Switch>
	);
}

RouteWithSubRoutes.defaultProps = {
	route: {
		exact: true,
	},
};

export const RouteProperties = PropTypes.shape({
	path: PropTypes.string.isRequired,
	key: PropTypes.string.isRequired,
	exact: PropTypes.bool,
	name: PropTypes.string.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	component: PropTypes.any.isRequired,
});

RouteWithSubRoutes.propTypes = {
	route: PropTypes.shape({
		path: PropTypes.string.isRequired,
		key: PropTypes.string.isRequired,
		exact: PropTypes.bool,
		name: PropTypes.string.isRequired,
		// eslint-disable-next-line react/forbid-prop-types
		component: PropTypes.any.isRequired,
		routes: PropTypes.arrayOf(
			PropTypes.shape({
				path: PropTypes.string.isRequired,
				key: PropTypes.string.isRequired,
				exact: PropTypes.bool,
				name: PropTypes.string.isRequired,
				// eslint-disable-next-line react/forbid-prop-types
				component: PropTypes.any.isRequired,
			}),
		),
	}),
};

RenderRoutes.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			key: PropTypes.string.isRequired,
			exact: PropTypes.bool,
			name: PropTypes.string.isRequired,
			// eslint-disable-next-line react/forbid-prop-types
			component: PropTypes.any.isRequired,
		}),
	).isRequired,
};

export default ROUTES;
