import React from 'react';
import PropTypes from 'prop-types';
import { Title, Text } from '@mantine/core';

export const Header = ({ children }) => <Title order={1}>{children}</Title>;

export const SubHeader = ({ children }) => (
	<Text component="h3" size="lg" weight={500}>
		{children}
	</Text>
);

Header.propTypes = {
	children: PropTypes.node.isRequired,
};

SubHeader.propTypes = {
	children: PropTypes.node.isRequired,
};
