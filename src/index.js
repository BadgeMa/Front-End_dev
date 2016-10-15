import React from 'react';
import ReactDOM from 'react-dom';

// Container Components
import { App } from './containers';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

let rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, rootElement
);
