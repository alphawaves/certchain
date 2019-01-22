import React from 'react'

class DetailedDocument extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const {id, url, name, issuer, receiver, date} = this.props.location.state
		return(
			<div>
				<h1>Detailed Document: {id} </h1>
				<h3>Name: {name}</h3>
				<img src={url} />
				<h3>Issuer: {issuer}</h3>
				<h3>Receiver: {receiver}</h3>
				<h3>Date issued: {date}</h3>
			</div>
		)
	}
}

export default DetailedDocument