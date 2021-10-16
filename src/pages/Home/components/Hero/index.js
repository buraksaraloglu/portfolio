import React from 'react';
import { Text, Space } from '@mantine/core';

import { Header, SubHeader } from '../Header';

import './styles.scss';

const Hero = () => (
	<section className="hero-container">
		<div>
			<Header>
				Hi, I&apos;m Burak <span className="text-gray-0 z-50">👋</span>
			</Header>
			<SubHeader>a software engineer</SubHeader>
		</div>
		<Space my={4} />
		<Text component="article">
			I dedicate my time to develop products and create useful services mostly built with React and
			NodeJS. I also do music productions and videos.
		</Text>
	</section>
);

export default Hero;
