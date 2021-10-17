import React from 'react';
import Skeleton from 'react-loading-skeleton';

import './styles.scss';

const HeroSkeleton = () => (
	<section className="hero-skeleton-container">
		<Skeleton width={250} height={44} />
		<Skeleton width={125} height={26} />
		<section className="hero-skeleton-container__description">
			<Skeleton count={2} height={26} />
		</section>
	</section>
);

export default HeroSkeleton;
