import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
// import LoginControl from './containers/LoginControl'
// import LogoutScreen from './containers/LogoutScreen'
// import PageNotFound from './containers/PageNotFound'

// main app
import App from './containers/App';

// const routing = (
// 	<Router>
// 		<div>
// 			<Switch>
// 				<Route exact path="/" component={LoginControl} />
// 				<Route path="/welcome" component={LogoutScreen} />
// 				<Route component={PageNotFound} />
// 			</Switch>
// 		</div>
// 	</Router>
// )

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))