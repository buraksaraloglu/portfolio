import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => (
	<section className="relative pb-20 pt-6 mt-24 xs:mt-36 md:mt-32 sm:pb-0 sm:pt-24 overflow-hidden">
		<div className="max-w-90 mx-auto my-0 px-3 transition-all duration-300 md:mt-20 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
			{children}
		</div>
	</section>
);

AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppLayout;
