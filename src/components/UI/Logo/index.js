import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '@mantine/core';

const Logo = () => (
	<Text component={Link} to="/">
		Burak Saraloglu
	</Text>
);

export default Logo;
