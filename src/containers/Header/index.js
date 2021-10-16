/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './styles.scss';
import Logo from '../../components/UI/Logo';
import Navigation from './Navigation';

const Header = () => (
	<header className="container">
		<Logo />
		<Navigation />
	</header>
);

export default Header;
