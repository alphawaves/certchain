import React from 'react'
import Dashboard from './Dashboard'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DetailedDocument from './DetailedDocument'

function App() {
	return(
		<div>
		<Route exact path="/" component={Dashboard} />
		<Route path="/document/:id" component={DetailedDocument} />
		</div>
	);
}

export default App

