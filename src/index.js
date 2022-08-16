import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.scss';
import { Providers } from './containers/Providers';

ReactDOM.render(
	<React.StrictMode>
		<Providers>
			<App />
		</Providers>
	</React.StrictMode>,
	document.querySelector('#root'),
);

reportWebVitals();
