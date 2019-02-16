import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { getStore } from './store';
import { unregister as unregisterServiceWorker } from './serviceWorker';

const store = getStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

unregisterServiceWorker();
