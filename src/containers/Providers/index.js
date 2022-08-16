import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider, GlobalStyles } from '@mantine/core';

export const Providers = ({ children }) => (
	<MantineProvider>
		<BrowserRouter>
			<GlobalStyles />
			{children}
		</BrowserRouter>
	</MantineProvider>
);
