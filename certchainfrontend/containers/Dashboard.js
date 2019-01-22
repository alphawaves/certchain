import React from 'react'
import SearchBar from './SearchBar'
import DocumentContainer from './DocumentContainer'

class Dashboard extends React.Component {
	render() {
		return(
			<div>
				<SearchBar />
				<DocumentContainer />
			</div>
		)
	}
}

export default Dashboard