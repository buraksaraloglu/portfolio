import React from 'react';
import { Container } from '@mantine/core';

import ROUTES, { RenderRoutes } from './shared/routes';
import Header from './containers/Header';

const App = () => (
	<main>
		<Container size={768}>
			<Header />
			<RenderRoutes routes={ROUTES} />
		</Container>
	</main>
);

export default App;
