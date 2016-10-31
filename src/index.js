import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import {
    App,
    Home,
    Login,
    Register,
    BambooGrove,
    ReportManager,
    CounselManager,
    Dashboard
} from './containers';

const store = createStore(reducers, applyMiddleware(thunk));
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
	        </Route>
	    </Router>
	</Provider>, rootElement);
