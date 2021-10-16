import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Text } from '@mantine/core';

import { RouteProperties } from '../../../shared/routes';
import './styles.scss';

const NavItem = ({ route, isMobile }) => (
	<div className="item">
		<Text
			weight={600}
			color="gray"
			component={Link}
			to={route.path}
			className={`item__text ${isMobile ? 'item__text__mobile' : null}`}
			aria-label={route.name}
		>
			{route.name}
		</Text>
	</div>
);

NavItem.defaultProps = {
	isMobile: false,
};

NavItem.propTypes = {
	route: RouteProperties.isRequired,
	isMobile: PropTypes.bool,
};

export default memo(NavItem);
