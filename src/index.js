import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider, GlobalStyles } from '@mantine/core';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<MantineProvider>
			<BrowserRouter>
				<GlobalStyles />
				<App />
			</BrowserRouter>
		</MantineProvider>
	</React.StrictMode>,
	document.querySelector('#root'),
);

reportWebVitals();
