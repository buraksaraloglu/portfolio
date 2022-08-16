import React, { memo } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Menu, Text } from '@mantine/core';
import { AiOutlineMenu } from 'react-icons/ai';

import { handleAnalyticsLog } from '../../../utils/handleAnalyticsLog';

import { MAX_DEVICE_SIZES } from '../../../utils/constants';

import './styles.scss';

const Navigation = () => {
	const isMobile = useMediaQuery(`(max-width: ${MAX_DEVICE_SIZES.PHONE}px)`);

	return isMobile ? (
		<Menu
			control={
				<div>
					<AiOutlineMenu size={24} />
				</div>
			}
			placement="end"
			position="bottom"
			size="sm"
			radius="md"
			closeOnItemClick
			zIndex={9999}
		>
			<Menu.Item
				component="a"
				href="/dist/burak-saraloglu-resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				className={`item__text ${isMobile ? 'item__text__mobile' : null}`}
				aria-label="Burak Saraloglu portfolio pdf link"
				onMouseDown={() => handleAnalyticsLog('click', `MENU - Portfolio`)}
			>
				Resume
			</Menu.Item>
			<Menu.Item
				component="a"
				href="mailto:buraksaraloglu1@gmail.com"
				rel="noopener noreferrer"
				className={`item__text ${isMobile ? 'item__text__mobile' : null}`}
				aria-label="Burak Saraloglu GitHub profile link"
				onMouseDown={() => handleAnalyticsLog('click', `MENU - Mail`)}
			>
				Mail
			</Menu.Item>
			<Menu.Item
				component="a"
				href="https://github.com/buraksaraloglu"
				target="_blank"
				rel="noopener noreferrer"
				className={`item__text ${isMobile ? 'item__text__mobile' : null}`}
				aria-label="Burak Saraloglu GitHub profile link"
				onMouseDown={() => handleAnalyticsLog('click', `MENU - GitHub`)}
			>
				GitHub
			</Menu.Item>
			<Menu.Item
				component="a"
				href="https://linkedin.com/in/buraksaraloglu"
				target="_blank"
				rel="noopener noreferrer"
				className={`item__text ${isMobile ? 'item__text__mobile' : null}`}
				aria-label="Burak Saraloglu LinkedIn profile link"
				onMouseDown={() => handleAnalyticsLog('click', `MENU - LinkedIn`)}
			>
				LinkedIn
			</Menu.Item>
		</Menu>
	) : (
		<nav className="navigation-container">
			<Text
				component="a"
				href="/dist/Burak_Saraloglu_Resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				className={`item__text ${isMobile ? 'item__text__mobile' : null}`}
				aria-label="Burak Saraloglu portfolio pdf link"
				onMouseDown={() => handleAnalyticsLog('click', `MENU - Portfolio`)}
			>
				Resume
			</Text>
			<Text
				component="a"
				href="mailto:buraksaraloglu1@gmail.com"
				rel="noopener noreferrer"
				className={`item__text ${isMobile ? 'item__text__mobile' : null}`}
				aria-label="Burak Saraloglu GitHub profile link"
				onMouseDown={() => handleAnalyticsLog('click', `MENU - Mail`)}
			>
				Mail
			</Text>
			<Text
				component="a"
				href="https://github.com/buraksaraloglu"
				target="_blank"
				rel="noopener noreferrer"
				className={`item__text ${isMobile ? 'item__text__mobile' : null}`}
				aria-label="Burak Saraloglu GitHub profile link"
				onMouseDown={() => handleAnalyticsLog('click', `MENU - GitHub`)}
			>
				GitHub
			</Text>
			<Text
				component="a"
				href="https://linkedin.com/in/buraksaraloglu"
				target="_blank"
				rel="noopener noreferrer"
				className={`item__text ${isMobile ? 'item__text__mobile' : null}`}
				aria-label="Burak Saraloglu LinkedIn profile link"
				onMouseDown={() => handleAnalyticsLog('click', `MENU - LinkedIn`)}
			>
				LinkedIn
			</Text>
		</nav>
	);
};

export default memo(Navigation);
