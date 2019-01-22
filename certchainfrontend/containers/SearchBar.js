import React from 'react'
import PublishedDocuments from './PublishedDocuments'
import UnpublishedDocuments from './UnpublishedDocuments'

class SearchBar extends React.Component {

	constructor() {
		super()
		this.state = {
			query: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleChange(event) {
		this.setState({
			query: event.target.value
		})
	}

	// handleClick(event) {
	// 	const query = this.state.query
	// 	const results = 
	// }

	render() {
		return(
			<div>
				<input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Enter document name here..." />
				<select>
					<option selected value="Document">Document</option>
					<option value="Entity">Entity</option>
				</select>
				<button onClick={this.handleClick}>Search</button>
			</div>
		)
	}
}

export default SearchBar