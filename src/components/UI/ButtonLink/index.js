import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { MAX_DEVICE_SIZES } from '../../../utils/constants';
import './styles.scss';

const ButtonLink = ({ title, href, ...props }) => {
	const isMobile = useMediaQuery(`(max-width: ${MAX_DEVICE_SIZES.PHONE}px)`);

	return (
		<Button
			variant="light"
			color="orange"
			component="a"
			href={href}
			weight={500}
			className="button-link"
			target="_blank"
			rel="noopener noreferrer"
			radius="md"
			compact={isMobile}
			{...props}
		>
			{title}
		</Button>
	);
};

ButtonLink.propTypes = {
	title: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
};

export default ButtonLink;
