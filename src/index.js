import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import {
    App,
    Home,
    Login,
    Register,
    BambooGrove,
    ReportManager,
    CounselManager,
    Dashboard,
	SeatingChart,
	User
} from './containers';

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

const store = createStore(reducers, applyMiddleware(thunk, ...middleware));

sagaMiddleware.run(rootSaga);

let rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
	    <Router history={browserHistory}>
	        <Route path="/" component={App}>
	            <IndexRoute component={Login}/>
	            <Route path="home" component={Home}/>
	            <Route path="login" component={Login}/>
	            <Route path="register" component={Register}/>
	            <Route path="bamboogrove" component={BambooGrove}/>
	            <Route path="reportmanager" component={ReportManager}/>
	            <Route path="counselmanager" component={CounselManager}/>
	            <Route path="dashboard" component={Dashboard}/>
				<Route path="seatingchart" component={SeatingChart}/>
				<Route path="user" component={User}/>
	        </Route>
	    </Router>
	</Provider>, rootElement);
